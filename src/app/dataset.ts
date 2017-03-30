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

  constructor(attribs: any) {
    for (let key in attribs) {
      let value = attribs[key];
      switch (key) {
        case "database_name":
          key = "databaseName";
          break;
        case "table_name":
          key = "tableName";
          break;
        case "type":
          key = "kind";
          break;
      }
      this[key] = value;
    }
  }
}
