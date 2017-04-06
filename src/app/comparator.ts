export enum ComparatorKind {
  compare,
  strcompare,
  within
}

export class Comparator {
  id: number;
  kind: ComparatorKind;
  set1: any[] = [];
  set2: any[] = [];
  options: any = {};
  order: number;
  linkageId: number;

  private static attributeMap = {
    id: "id",
    kind: "kind",
    set_1: "set1",
    set_2: "set2",
    options: "options",
    order: "order",
    linkage_id: "linkageId"
  };

  constructor(attribs: any) {
    for (let key in attribs) {
      if (key in Comparator.attributeMap) {
        let mappedKey = Comparator.attributeMap[key];
        this[mappedKey] = attribs[key];
      }
    }
  }

  toJSON(): string {
    let attribs = {};
    for (let key in Comparator.attributeMap) {
      let mappedKey = Comparator.attributeMap[key];
      attribs[key] = this[mappedKey];
    }
    return JSON.stringify(attribs);
  }
}
