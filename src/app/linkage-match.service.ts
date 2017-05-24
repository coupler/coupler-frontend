import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { LinkageMatch } from './linkage-match';
import { environment } from '../environments/environment';

@Injectable()
export class LinkageMatchService {
  private linkageResultsUrl = `${environment.apiUrl}/linkage_results`;
  private headers = new Headers({'Content-Type': 'application/json'});
  private attributeMap = {
    record_1: "record1",
    record_2: "record2",
    score: "score"
  };

  constructor(private http: Http) {}

  getLinkageMatch(linkageResultId: number, index: number): Promise<LinkageMatch> {
    let url = `${this.linkageResultsUrl}/${linkageResultId}/matches/${index}`;

    return this.http.
      get(url).
      toPromise().
      then(response => {
        let data = response.json();
        return(this.build(data));
      });
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
