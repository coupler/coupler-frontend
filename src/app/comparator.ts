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

  operationDescription(): string {
    switch (this.kind) {
      case ComparatorKind.compare:
        switch (this.options.operation) {
          case 'equal':
            return 'Equal (==)';
          case 'not_equal':
            return 'Not equal (!=)';
          case 'greater_than':
            return 'Greater than (>)';
          case 'greater_than_or_equal':
            return 'Greater than or equal to (>=)';
          case 'less_than':
            return 'Less than (<)';
          case 'less_than_or_equal':
            return 'Less than or equal to (<=)';
        }
        break;
      case ComparatorKind.strcompare:
        switch (this.options.operation) {
          case 'jarowinkler':
            return 'Jaro-Winkler';
          case 'reverse_jarowinkler':
            return 'Reverse Jaro-Winkler';
          case 'damerau_levenshtein':
            return 'Damerau-Levenshtein';
        }
    }
    return this.options.operation;
  }

  set1Description(): string {
    return this.sets.map(s => s.field1).join(", ");
  }

  set2Description(): string {
    return this.sets.map(s => s.field1).join(", ");
  }

  setsDescription(): string {
    return this.sets.map(set => {
      return [set.field1, set.field2].join(", ");
    }).join("; ")
  }

  clone(): Comparator {
    let c = new Comparator();
    c.id = this.id;
    c.kind = this.kind;
    c.sets = this.sets.slice();
    c.options = Object.assign({}, this.options);
    c.order = this.order;
    c.linkageId = this.linkageId;
    return c;
  }
}
