import { Dataset } from './dataset';

export class Migration {
  id: number;
  description: string;
  operations: any[];
  inputDatasetId: number;
  outputDatasetId: number;

  inputDataset: Dataset;
  outputDataset: Dataset;
}
