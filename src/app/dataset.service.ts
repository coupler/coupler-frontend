import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Dataset } from './dataset';
import { Field } from './field';
import { environment } from '../environments/environment';

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

  constructor(private http: Http) { }

  getDatasets(): Promise<Dataset[]> {
    return this.http.
      get(this.datasetsUrl).
      toPromise().
      then(response => {
        let data = response.json();
        return data.map(attribs => this.build(attribs));
      });
  }

  getDataset(id: number, includeFields = true): Promise<Dataset> {
    const url = `${this.datasetsUrl}/${id}`;
    return this.http.
      get(url, { params: { include_fields: includeFields } }).
      toPromise().
      then(response => this.build(response.json())).
      catch(this.handleError);
  }

  create(dataset: Dataset): Promise<any> {
    if (dataset.id) {
      throw new Error('Dataset must not already have `id` when creating.');
    }
    const url = this.datasetsUrl;
    let data = JSON.stringify(this.unbuild(dataset));
    let result = this.http.post(url, data, {headers: this.headers});
    return new Promise((resolve, reject) => {
      let value;
      result.subscribe(
        response => {
          // success
          resolve(response.json());
        },
        response => {
          // error
          reject(response.json());
        }
      );
    });
  }

  update(dataset: Dataset): Promise<any> {
    const url = `${this.datasetsUrl}/${dataset.id}`;
    let data = JSON.stringify(this.unbuild(dataset));
    let result = this.http.put(url, data, {headers: this.headers});
    return new Promise((resolve, reject) => {
      let value;
      result.subscribe(
        response => {
          // success
          resolve(response.json());
        },
        response => {
          // error
          reject(response.json());
        }
      );
    });
  }

  handleError(error: any) {
    console.error(error);
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
