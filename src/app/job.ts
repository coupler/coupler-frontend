import { LinkageResult } from './linkage-result';

export class Job {
  id: number;
  kind: string;
  status: string;
  error: string;
  linkageId: number;
  linkageResultId: number;
  startedAt: Date;
  endedAt: Date;
  linkageResult: LinkageResult;

  private static attributeMap = {
    id: "id",
    kind: "kind",
    status: "status",
    error: "error",
    linkage_id: "linkageId",
    linkage_result_id: "linkageResultId",
    started_at: "startedAt",
    ended_at: "endedAt",
    linkage_result: "linkageResult"
  };

  constructor(attribs: any) {
    for (let key in attribs) {
      let value = attribs[key];
      if (key in Job.attributeMap) {
        let mappedKey = Job.attributeMap[key];
        switch (mappedKey) {
          case 'linkageResult':
            value = new LinkageResult(value);
            break;
        }
        this[mappedKey] = value;
      }
    }
  }

  toJSON(): string {
    let attribs = {};
    for (let key in Job.attributeMap) {
      let mappedKey = Job.attributeMap[key];
      let value = this[mappedKey];
      if (!value) {
        continue;
      }

      switch (mappedKey) {
        case 'startedAt':
        case 'endedAt':
        case 'status':
          continue;

        case 'linkageId':
          value = +value;
          break;
      }

      attribs[key] = value;
    }
    return JSON.stringify(attribs);
  }
}
