import { Dataset } from './dataset';
import { Comparator } from './comparator';

export class Linkage {
  id: number;
  name: string;
  description: string;
  dataset1Id: number;
  dataset2Id: number;
  dataset1: Dataset;
  dataset2: Dataset;
  comparators: Comparator[] = [];

  private static attributeMap = {
    id: "id",
    name: "name",
    description: "description",
    dataset_1_id: "dataset1Id",
    dataset_2_id: "dataset2Id",
    dataset_1: "dataset1",
    dataset_2: "dataset2",
    comparators: "comparators"
  };

  constructor(attribs: any) {
    for (let key in attribs) {
      let value = attribs[key];
      if (key in Linkage.attributeMap) {
        let mappedKey = Linkage.attributeMap[key];

        switch (mappedKey) {
          case 'dataset1':
          case 'dataset2':
            value = new Dataset(value);
            break;
          case 'comparators':
            value = value.map(cattribs => new Comparator(cattribs));
            break;
        }

        this[mappedKey] = value;
      }
    }
  }

  toJSON(): string {
    let attribs = {};
    for (let key in Linkage.attributeMap) {
      let mappedKey = Linkage.attributeMap[key];
      let value = this[mappedKey];
      if (!value) {
        continue;
      }

      switch (mappedKey) {
        case 'dataset1':
        case 'dataset2':
        case 'comparators':
          continue;

        case 'dataset1Id':
        case 'dataset2Id':
          value = +value;
          break;
      }

      attribs[key] = value;
    }
    return JSON.stringify(attribs);
  }

  findComparator(id: number): Comparator {
    return this.comparators.find(comparator => comparator.id == id);
  }
}
