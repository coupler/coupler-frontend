import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AbstractService } from './abstract-service';
import { Dataset } from './dataset';
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
    table_name: "tableName",
    fields: "fields"
  };

  constructor(private http: HttpClient) {
    super();
  }

  getDatasets(): Observable<Dataset[] | ClientError> {
    return this.http.get<any[]>(this.datasetsUrl).
      map(data => data.map(d => this.build(d))).
      catch(this.handleClientError);
  }

  getDataset(id: number, includeFields = true): Observable<Dataset | ClientError> {
    const url = `${this.datasetsUrl}/${id}`;
    const options = { params: { include_fields: includeFields ? 'true' : 'false' } }
    return this.http.get(url, options).
      map(data => this.build(data)).
      catch(this.handleClientError);
  }

  create(dataset: Dataset): Observable<Dataset | ClientError | ValidationError> {
    if (dataset.id) {
      throw new Error('Dataset must not already have `id` when creating.');
    }
    const url = this.datasetsUrl;
    return this.http.post<{id: number}>(url, this.unbuild(dataset)).
      map(data => {
        dataset.id = data.id;
        return dataset;
      }).
      catch(this.handleError);
  }

  update(dataset: Dataset): Observable<Dataset | ClientError | ValidationError> {
    const url = `${this.datasetsUrl}/${dataset.id}`;
    return this.http.put(url, this.unbuild(dataset)).
      map(data => dataset).
      catch(this.handleError);
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
}
