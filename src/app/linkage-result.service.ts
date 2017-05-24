import { Injectable } from '@angular/core';

import { LinkageResult } from './linkage-result';

@Injectable()
export class LinkageResultService {
  private attributeMap = {
    id: "id",
    linkage_id: "linkageId",
    job_id: "jobId",
    match_count: "matchCount"
  };

  build(attribs: any): LinkageResult {
    let result = new LinkageResult();
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
