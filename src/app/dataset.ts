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

  private static attributeMap = {
    id: "id",
    name: "name",
    type: "kind",
    host: "host",
    username: "username",
    password: "password",
    database_name: "databaseName",
    table_name: "tableName",
    fields: "fields"
  };

  constructor(attribs: any) {
    for (let key in attribs) {
      if (key in Dataset.attributeMap) {
        let value = attribs[key];
        if (key == "fields") {
          value = value as Field[];
        }
        let mappedKey = Dataset.attributeMap[key];
        this[mappedKey] = value;
      }
    }
  }

  toJSON(): string {
    let attribs = {};
    for (let key in Dataset.attributeMap) {
      if (key == "fields") {
        continue;
      }
      let mappedKey = Dataset.attributeMap[key];
      attribs[key] = this[mappedKey];
    }
    return JSON.stringify(attribs);
  }
}
