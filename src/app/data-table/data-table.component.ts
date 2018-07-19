import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

import { DataTable } from '../data-table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnChanges {
  @Input() dataTable: DataTable;
  @Input() numPages: number;
  @Input() pageSize = 10;
  @Input() currentPage = 0;
  rows: any[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes.dataTable;
    if (change && change.currentValue) {
      this.getRows();
    }
  }

  nextPage(): void {
    this.currentPage++;
    this.getRows();
  }

  prevPage(): void {
    this.currentPage--;
    this.getRows();
  }

  private getRows(): void {
    this.dataTable.
      getRows(this.currentPage * this.pageSize, this.pageSize).
      subscribe(rows => {
        this.rows = rows;
      });
  }
}
