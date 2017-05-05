import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { LinkageResult } from './linkage-result';
import { LinkageMatch } from './linkage-match';
import { environment } from '../environments/environment';

@Injectable()
export class LinkageResultService {
  private linkageResultsUrl = `${environment.apiUrl}/linkage_results`;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getMatch(lr: LinkageResult, index: number): Promise<LinkageMatch> {
    let url = `${this.linkageResultsUrl}/${lr.id}/matches/${index}`;

    return this.http.
      get(url).
      toPromise().
      then(response => {
        let data = response.json();
        return(new LinkageMatch(data));
      });
  }
}
