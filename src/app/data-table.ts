import { EventEmitter } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';

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
  onFetch = new EventEmitter();

  constructor(public columns: DataColumn[], totalRows: number) {}

  addRows(rows: any[]): void {
    this.rows = this.rows.concat(rows);
  }

  getRows(offset: number, limit: number): Observable<any[]> {
    let offlim = offset + limit;
    let len = this.rows.length;
    if (offlim > len) {
      let done = new EventEmitter();
      this.onFetch.emit({
        offset: len,
        limit: offlim - len,
        done: done
      });
      return done.pipe(
        map(rows => {
          this.addRows(rows);
          if (offlim > this.rows.length) {
            throw new Error("failed to fetch rows: (" + limit + ", " + offset + ")")
          }
          return this.rows.slice(offset, offset + limit);
        })
      );
    } else {
      return observableOf(this.rows.slice(offset, offset + limit));
    }
  }

  numRows(): number {
    return this.rows.length;
  }
}
