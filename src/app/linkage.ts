import { Dataset } from './dataset';
import { Comparator } from './comparator';
import { Job } from './job';

export class Linkage {
  id: number;
  name: string;
  description: string;
  dataset1Id: number;
  dataset2Id: number;
  dataset1: Dataset;
  dataset2: Dataset;
  comparators: Comparator[] = [];
  jobs: Job[] = [];

  findComparator(id: number): Comparator {
    return this.comparators.find(comparator => comparator.id == id);
  }

  findComparatorIndex(id: number): number {
    return this.comparators.findIndex(comparator => comparator.id == id);
  }

  findJob(id: number): Job {
    return this.jobs.find(job => job.id == id);
  }
}
