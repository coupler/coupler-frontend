import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { ClientError, ValidationError } from './errors';
import { SerializationService } from './serialization.service';
import { Comparator } from './comparator';
import { environment } from '../environments/environment';

@Injectable()
export class ComparatorService extends AbstractService {
  private comparatorsUrl = environment.apiUrl + '/comparators';

  constructor(
    private http: HttpClient,
    private serializer: SerializationService
  ) {
    super();
  }

  getComparators(): Observable<Comparator[] | ClientError> {
    const url = this.comparatorsUrl;
    return this.http.get<any[]>(url).pipe(
      map(data => data.map(d => this.serializer.buildComparator(d))),
      catchError(this.handleClientError)
    );
  }

  getComparator(id: number): Observable<Comparator | ClientError> {
    const url = `${this.comparatorsUrl}/${id}`;
    return this.http.get(url).pipe(
      map(data => this.serializer.buildComparator(data)),
      catchError(this.handleClientError)
    );
  }

  create(comparator: Comparator): Observable<Comparator | ClientError | ValidationError> {
    if (comparator.id) {
      throw new Error('Comparator must not already have `id` when creating.');
    }
    const url = this.comparatorsUrl;
    return this.http.post<{id: number}>(url, this.serializer.unbuildComparator(comparator)).pipe(
      map(data => {
        comparator.id = data.id;
        return comparator;
      }),
      catchError(this.handleError)
    );
  }

  update(comparator: Comparator): Observable<Comparator | ClientError | ValidationError> {
    const url = `${this.comparatorsUrl}/${comparator.id}`;
    let data = JSON.stringify(this.serializer.unbuildComparator(comparator));
    return this.http.put(url, this.serializer.unbuildComparator(comparator)).pipe(
      map(data => comparator),
      catchError(this.handleError)
    );
  }

  delete(comparator: Comparator): Observable<Comparator | ClientError | ValidationError> {
    const url = `${this.comparatorsUrl}/${comparator.id}`;
    return this.http.delete(url).pipe(
      map(data => comparator),
      catchError(this.handleError)
    );
  }
}
