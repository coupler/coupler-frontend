export class LinkageMatch {
  record1: any;
  record2: any;
  score: number;

  private static attributeMap = {
    record_1: "record1",
    record_2: "record2",
    score: "score"
  };

  constructor(attribs: any) {
    for (let key in attribs) {
      let value = attribs[key];
      if (key in LinkageMatch.attributeMap) {
        let mappedKey = LinkageMatch.attributeMap[key];
        this[mappedKey] = value;
      }
    }
  }
}
