import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { ClientError, ValidationError } from './errors';
import { SerializationService } from './serialization.service';
import { Linkage } from './linkage';
import { environment } from '../environments/environment';

@Injectable()
export class LinkageService extends AbstractService {
  private linkagesUrl = environment.apiUrl + '/linkages';

  constructor(
    private http: HttpClient,
    private serializer: SerializationService
  ) {
    super();
  }

  getLinkages(): Observable<Linkage[] | ClientError> {
    return this.http.get<any[]>(this.linkagesUrl).pipe(
      map(data => data.map(d => this.serializer.buildLinkage(d))),
      catchError(this.handleClientError)
    );
  }

  getLinkage(id: number): Observable<Linkage | ClientError> {
    const url = `${this.linkagesUrl}/${id}`;
    return this.http.get(url).pipe(
      map(data => this.serializer.buildLinkage(data)),
      catchError(this.handleClientError)
    );
  }

  create(linkage: Linkage): Observable<Linkage | ClientError | ValidationError> {
    if (linkage.id) {
      throw new Error('Linkage must not already have `id` when creating.');
    }
    const url = this.linkagesUrl;
    let data = JSON.stringify(this.serializer.unbuildLinkage(linkage));
    return this.http.post<{id: number}>(url, this.serializer.unbuildLinkage(linkage)).pipe(
      map(data => {
        linkage.id = data.id;
        return linkage;
      }),
      catchError(this.handleError)
    );
  }

  update(linkage: Linkage): Observable<Linkage | ClientError | ValidationError> {
    const url = `${this.linkagesUrl}/${linkage.id}`;
    return this.http.put(url, this.serializer.unbuildLinkage(linkage)).pipe(
      map(data => linkage),
      catchError(this.handleError)
    );
  }

  delete(linkage: Linkage): Observable<Linkage | ClientError> {
    const url = `${this.linkagesUrl}/${linkage.id}`;
    return this.http.delete(url).pipe(
      map(data => linkage),
      catchError(this.handleClientError)
    );
  }
}
