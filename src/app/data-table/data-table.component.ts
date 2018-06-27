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
  @Output() onPageChange = new EventEmitter();
  rows: any[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes.dataTable;
    if (change.currentValue) {
      this.getRows();
    }
  }

  private getRows(): void {
    this.rows = this.dataTable.getRows(this.pageSize, this.currentPage * this.pageSize);
  }
}
