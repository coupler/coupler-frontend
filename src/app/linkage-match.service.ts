import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { LinkageMatch } from './linkage-match';
import { environment } from '../environments/environment';

export enum LinkageMatchErrorKind { Client, Validation };

export class LinkageMatchError {
  constructor(public kind: LinkageMatchErrorKind, error: any) {}
}

@Injectable()
export class LinkageMatchService {
  private linkageResultsUrl = `${environment.apiUrl}/linkage_results`;
  private attributeMap = {
    record_1: "record1",
    record_2: "record2",
    score: "score"
  };

  constructor(private http: HttpClient) {}

  getLinkageMatch(linkageResultId: number, index: number): Observable<LinkageMatch | LinkageMatchError> {
    let url = `${this.linkageResultsUrl}/${linkageResultId}/matches/${index}`;

    return this.http.get(url).map(
      data => this.build(data),
      this.handleError
    );
  }

  build(attribs: any): LinkageMatch {
    let result = new LinkageMatch();
    for (let key in attribs) {
      let value = attribs[key];
      if (key in this.attributeMap) {
        let mappedKey = this.attributeMap[key];
        result[mappedKey] = value;
      }
    }
    return result;
  }

  handleError(err: HttpErrorResponse): LinkageMatchError {
    if (err.error instanceof Error) {
      // client-side or network error
      return new LinkageMatchError(LinkageMatchErrorKind.Client, err.error);
    } else {
      // unsuccessful response code
      return new LinkageMatchError(LinkageMatchErrorKind.Validation, err.error.errors);
    }
  }
}
