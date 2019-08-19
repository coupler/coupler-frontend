import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AbstractService } from './abstract-service';
import { ClientError } from './errors';
import { SerializationService } from './serialization.service';
import { LinkageMatch } from './linkage-match';
import { environment } from '../environments/environment';

@Injectable()
export class LinkageMatchService extends AbstractService {
  private linkageResultsUrl = `${environment.apiUrl}/linkage_results`;

  constructor(
    private http: HttpClient,
    private serializer: SerializationService
  ) {
    super();
  }

  getLinkageMatch(linkageResultId: number, index: number): Observable<LinkageMatch | ClientError> {
    let url = `${this.linkageResultsUrl}/${linkageResultId}/matches/${index}`;

    return this.http.get(url).pipe(
      map(data => this.serializer.buildLinkageMatch(data)),
      catchError(this.handleClientError)
    );
  }
}
