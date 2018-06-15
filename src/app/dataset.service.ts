import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { Dataset, DatasetKind } from './dataset';
import { Field } from './field';
import { ClientError, ValidationError } from './errors';
import { environment } from '../environments/environment';

@Injectable()
export class DatasetService extends AbstractService {
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
    database_path: "databasePath",
    table_name: "tableName",
    fields: "fields",
    csv_import_id: "csvImportId"
  };

  constructor(private http: HttpClient) {
    super();
  }

  getDatasets(): Observable<Dataset[] | ClientError> {
    return this.http.get<any[]>(this.datasetsUrl).pipe(
      map(data => data.map(d => this.build(d))),
      catchError(this.handleClientError)
    );
  }

  getDataset(id: number, includeFields = true): Observable<Dataset | ClientError> {
    const url = `${this.datasetsUrl}/${id}`;
    const options = { params: { include_fields: includeFields ? 'true' : 'false' } }
    return this.http.get(url, options).pipe(
      map(data => this.build(data)),
      catchError(this.handleClientError)
    );
  }

  create(dataset: Dataset): Observable<Dataset | ClientError | ValidationError> {
    if (dataset.id) {
      throw new Error('Dataset must not already have `id` when creating.');
    }
    const url = this.datasetsUrl;
    return this.http.post<{id: number}>(url, this.unbuild(dataset)).pipe(
      map(data => {
        dataset.id = data.id;
        return dataset;
      }),
      catchError(this.handleError)
    );
  }

  update(dataset: Dataset): Observable<Dataset | ClientError | ValidationError> {
    const url = `${this.datasetsUrl}/${dataset.id}`;
    return this.http.put(url, this.unbuild(dataset)).pipe(
      map(data => dataset),
      catchError(this.handleError)
    );
  }

  build(attribs: any): Dataset {
    let result = new Dataset();
    for (let key in attribs) {
      if (key in this.attributeMap) {
        let value = attribs[key];
        if (key == "fields") {
          value = value as Field[];
        } else if (key == "type") {
          value = value as DatasetKind;
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
}
