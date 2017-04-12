export class Job {
  id: number;
  kind: string;
  status: string;
  linkageId: number;
  startedAt: Date;
  endedAt: Date;

  private static attributeMap = {
    id: "id",
    kind: "kind",
    status: "status",
    linkage_id: "linkageId",
    started_at: "startedAt",
    ended_at: "endedAt"
  };

  constructor(attribs: any) {
    for (let key in attribs) {
      let value = attribs[key];
      if (key in Job.attributeMap) {
        let mappedKey = Job.attributeMap[key];
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
