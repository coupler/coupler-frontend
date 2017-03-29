export enum DatasetType {
  MySQL
}

export class Dataset {
  id: number;
  name: string;
  type: DatasetType;
  host: string;
  username: string;
  password: string;
  databaseName: string;
  tableName: string;
}
