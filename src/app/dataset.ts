import { Field } from './field';

export enum DatasetKind {
  MySQL = "mysql",
  SQLite3 = "sqlite3",
  CSV = "csv"
}

export class Dataset {
  id: number;
  name: string;
  kind: DatasetKind;
  host: string;
  username: string;
  password: string;
  databaseName: string;
  datasetPath: string;
  tableName: string;
  fields: Field[];
  csvImportId: number;

  annotatedType(): string {
    switch (this.kind) {
      case DatasetKind.MySQL:
        return 'MySQL';

      case DatasetKind.SQLite3:
        return 'SQLite3 (from CSV)';

      case DatasetKind.CSV:
        return 'CSV';
    }
    return '';
  }
}
