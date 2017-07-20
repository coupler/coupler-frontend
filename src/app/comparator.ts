export enum ComparatorKind {
  compare,
  strcompare,
  within
}

export class ComparatorSet {
  field1: string;
  field2: string;
}

export class Comparator {
  id: number;
  kind: ComparatorKind;
  sets: ComparatorSet[] = [];
  options: any = {};
  order: number;
  linkageId: number;
}
