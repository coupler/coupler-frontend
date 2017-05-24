import { Field } from './field';

export enum DatasetKind {
  mysql
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
