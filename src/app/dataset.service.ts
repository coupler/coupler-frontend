import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Dataset } from './dataset';
import { environment } from '../environments/environment';

@Injectable()
export class DatasetService {
  private datasetsUrl = environment.apiUrl + '/datasets';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getDatasets(): Promise<Dataset[]> {
    return this.http.
      get(this.datasetsUrl).
      toPromise().
      then(response => {
        let data = response.json();
        return data.map(attribs => new Dataset(attribs));
      }).
      catch(this.handleError);
  }

  getDataset(id: number): Promise<Dataset> {
    const url = `${this.datasetsUrl}/${id}`;
    return this.http.
      get(url).
      toPromise().
      then(response => new Dataset(response.json())).
      catch(this.handleError);
  }

  create(dataset: Dataset): Promise<any> {
    if (dataset.id) {
      throw new Error('Dataset must not already have `id` when creating.');
    }
    const url = this.datasetsUrl;
    let result = this.http.post(url, dataset.toJSON(), {headers: this.headers});
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
    let result = this.http.put(url, dataset.toJSON(), {headers: this.headers});
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
}
