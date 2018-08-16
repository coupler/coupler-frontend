export enum ComparatorKind {
  compare = "compare",
  strcompare = "strcompare",
  within = "within"
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

  kindDescription(): string {
    switch (this.kind) {
      case ComparatorKind.compare:
        return "Generic comparison";
      case ComparatorKind.strcompare:
        return "String comparison";
      case ComparatorKind.within:
        return "Within comparison";
    }
    return "";
  }

  set1Description(): string {
    return this.sets.map(s => s.field1).join(", ");
  }

  set2Description(): string {
    return this.sets.map(s => s.field1).join(", ");
  }
}
