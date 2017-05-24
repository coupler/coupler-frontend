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
}
