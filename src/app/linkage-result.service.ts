import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { ClientError } from './errors';
import { SerializationService } from './serialization.service';
import { LinkageResult } from './linkage-result';
import { environment } from '../environments/environment';

@Injectable()
export class LinkageResultService extends AbstractService {
  private linkageResultsUrl = `${environment.apiUrl}/linkage_results`;

  constructor(
    private http: HttpClient,
    private serializer: SerializationService
  ) {
    super();
  }

  getLinkageResult(id: number): Observable<LinkageResult | ClientError> {
    const url = `${this.linkageResultsUrl}/${id}`;
    return this.http.get(url).pipe(
      map(data => this.serializer.buildLinkageResult(data)),
      catchError(this.handleClientError)
    );
  }
}
