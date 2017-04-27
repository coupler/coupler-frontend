export class LinkageResult {
  id: number;
  linkageId: number;
  jobId: number;
  matchCount: number;

  private static attributeMap = {
    id: "id",
    linkage_id: "linkageId",
    job_id: "jobId",
    match_count: "matchCount"
  };

  constructor(attribs: any) {
    for (let key in attribs) {
      let value = attribs[key];
      if (key in LinkageResult.attributeMap) {
        let mappedKey = LinkageResult.attributeMap[key];
        this[mappedKey] = value;
      }
    }
  }
}
