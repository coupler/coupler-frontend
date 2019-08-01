import { Dataset } from './dataset';
import { Comparator } from './comparator';
import { LinkageResult } from './linkage-result';

export class Linkage {
  id: number;
  name: string;
  description: string;
  threshold: number;
  dataset1Id: number;
  dataset2Id: number;
  dataset1: Dataset;
  dataset2: Dataset;
  comparators: Comparator[] = [];
  linkageResults: LinkageResult[] = [];

  findComparator(id: number): Comparator {
    return this.comparators.find(comparator => comparator.id == id);
  }

  findComparatorIndex(id: number): number {
    return this.comparators.findIndex(comparator => comparator.id == id);
  }

  findLinkageResult(id: number): LinkageResult {
    return this.linkageResults.find(linkageResult => linkageResult.id == id);
  }
}
