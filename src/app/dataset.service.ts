import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { ClientError, ValidationError } from './errors';
import { SerializationService } from './serialization.service';
import { Dataset } from './dataset';
import { environment } from '../environments/environment';

@Injectable()
export class DatasetService extends AbstractService {
  private datasetsUrl = environment.apiUrl + '/datasets';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient,
    private serializer: SerializationService
  ) {
    super();
  }

  getDatasets(includeFields = false, includePending = false): Observable<Dataset[] | ClientError> {
    const options = {
      params: {
        include_fields: includeFields ? 'true' : 'false',
        include_pending: includePending ? 'true' : 'false'
      }
    }
    return this.http.get<any[]>(this.datasetsUrl, options).pipe(
      map(data => data.map(d => this.serializer.buildDataset(d))),
      catchError(this.handleClientError)
    );
  }

  getDataset(id: number, includeFields = true): Observable<Dataset | ClientError> {
    const url = `${this.datasetsUrl}/${id}`;
    const options = { params: { include_fields: includeFields ? 'true' : 'false' } }
    return this.http.get(url, options).pipe(
      map(data => this.serializer.buildDataset(data)),
      catchError(this.handleClientError)
    );
  }

  countRecords(id: number): Observable<number | ClientError> {
    const url = `${this.datasetsUrl}/${id}/count_records`;
    return this.http.get<number>(url).pipe(
      map(data => data),
      catchError(this.handleClientError)
    );
  }

  getRecords(id: number, offset: number, limit: number): Observable<any[] | ClientError | ValidationError> {
    const url = `${this.datasetsUrl}/${id}/records`;
    const params = {
      limit: limit.toString(),
      offset: offset.toString()
    };
    const options = { params: params }
    return this.http.get<any[]>(url, options).pipe(
      catchError(this.handleClientError)
    );
  }

  create(dataset: Dataset): Observable<Dataset | ClientError | ValidationError> {
    if (dataset.id) {
      throw new Error('Dataset must not already have `id` when creating.');
    }
    const url = this.datasetsUrl;
    return this.http.post<{id: number}>(url, this.serializer.unbuildDataset(dataset)).pipe(
      map(data => {
        dataset.id = data.id;
        return dataset;
      }),
      catchError(this.handleError)
    );
  }

  update(dataset: Dataset): Observable<Dataset | ClientError | ValidationError> {
    const url = `${this.datasetsUrl}/${dataset.id}`;
    return this.http.put(url, this.serializer.unbuildDataset(dataset)).pipe(
      map(data => dataset),
      catchError(this.handleError)
    );
  }
}
