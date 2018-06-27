export enum DataColumnType {
  Integer = "integer",
  Number = "number",
  Text = "text"
}

export class DataColumn {
  name: string;
  type: DataColumnType;
  primaryKey: boolean;
}

export class DataTable {
  rows: any[] = [];

  constructor(public columns: DataColumn[]) {}

  addRows(rows: any[]): void {
    this.rows = this.rows.concat(rows);
    console.log(this.rows);
  }

  getRows(limit: number, offset: number): any[] {
    console.log('getRows limit:', limit, 'offset:', offset);
    return this.rows.slice(offset, offset + limit);
  }

  numRows(): number {
    return this.rows.length;
  }
}
