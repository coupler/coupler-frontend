import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Dataset } from './dataset';
import { environment } from '../environments/environment';

@Injectable()
export class DatasetService {
  private datasetsUrl = environment.apiUrl + '/datasets';

  constructor(private http: Http) { }

  getDatasets(): Promise<Dataset[]> {
    return this.http.
      get(this.datasetsUrl).
      toPromise().
      then(response => response.json() as Dataset[]).
      catch(this.handleError);
  }

  getDataset(id: number): Promise<Dataset> {
    return this.http.
      get(`${this.datasetsUrl}/${id}`).
      toPromise().
      then(response => response.json() as Dataset).
      catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
  }
}
