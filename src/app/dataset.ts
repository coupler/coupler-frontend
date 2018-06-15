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
  tableName: string;
  fields: Field[];
}
