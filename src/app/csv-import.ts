export class CsvImport {
  id: number;
  originalName: string;
  fileSize: number;
  sha1Sum: string;
  fields: any[];
  createdAt: Date;
  datasetId?: number;
  data?: string;
  rows?: any[];
}
