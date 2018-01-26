import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Dataset } from './dataset';
import { Field } from './field';
import { environment } from '../environments/environment';

export enum DatasetErrorKind { Client, Validation };

export class DatasetError {
  constructor(public kind: DatasetErrorKind, error: any) {}
}

@Injectable()
export class DatasetService {
  private datasetsUrl = environment.apiUrl + '/datasets';
  private headers = new Headers({'Content-Type': 'application/json'});
  private attributeMap = {
    id: "id",
    name: "name",
    type: "kind",
    host: "host",
    username: "username",
    password: "password",
    database_name: "databaseName",
    table_name: "tableName",
    fields: "fields"
  };

  constructor(private http: HttpClient) { }

  getDatasets(): Observable<Dataset[] | DatasetError> {
    return this.http.get<any[]>(this.datasetsUrl).map(
      data => data.map(d => this.build(d)),
      this.handleError
    );
  }

  getDataset(id: number, includeFields = true): Observable<Dataset | DatasetError> {
    const url = `${this.datasetsUrl}/${id}`;
    const options = { params: { include_fields: includeFields ? '1' : '0' } }
    return this.http.get(url, options).map(
      data => this.build(data),
      this.handleError
    );
  }

  create(dataset: Dataset): Observable<Dataset | DatasetError> {
    if (dataset.id) {
      throw new Error('Dataset must not already have `id` when creating.');
    }
    const url = this.datasetsUrl;
    return this.http.post<{id: number}>(url, this.unbuild(dataset)).map(
      data => {
        dataset.id = data.id;
        return dataset;
      },
      this.handleError
    );
  }

  update(dataset: Dataset): Observable<Dataset | DatasetError> {
    const url = `${this.datasetsUrl}/${dataset.id}`;
    return this.http.put(url, this.unbuild(dataset)).map(
      data => dataset,
      this.handleError
    );
  }

  build(attribs: any): Dataset {
    let result = new Dataset();
    for (let key in attribs) {
      if (key in this.attributeMap) {
        let value = attribs[key];
        if (key == "fields") {
          value = value as Field[];
        }
        let mappedKey = this.attributeMap[key];
        result[mappedKey] = value;
      }
    }
    return result;
  }

  unbuild(dataset: Dataset): any {
    let result = {};
    for (let key in this.attributeMap) {
      if (key == "fields") {
        continue;
      }
      let mappedKey = this.attributeMap[key];
      result[key] = dataset[mappedKey];
    }
    return result;
  }

  handleError(err: HttpErrorResponse): DatasetError {
    if (err.error instanceof Error) {
      // client-side or network error
      return new DatasetError(DatasetErrorKind.Client, err.error);
    } else {
      // unsuccessful response code
      return new DatasetError(DatasetErrorKind.Validation, err.error.errors);
    }
  }
}
