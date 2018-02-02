import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AbstractService } from './abstract-service';
import { ClientError } from './errors';
import { LinkageMatch } from './linkage-match';
import { environment } from '../environments/environment';

@Injectable()
export class LinkageMatchService extends AbstractService {
  private linkageResultsUrl = `${environment.apiUrl}/linkage_results`;
  private attributeMap = {
    record_1: "record1",
    record_2: "record2",
    score: "score"
  };

  constructor(private http: HttpClient) {
    super();
  }

  getLinkageMatch(linkageResultId: number, index: number): Observable<LinkageMatch | ClientError> {
    let url = `${this.linkageResultsUrl}/${linkageResultId}/matches/${index}`;

    return this.http.get(url).map(
      data => this.build(data),
      this.handleClientError
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
}
