import { Component, Input, Output, OnChanges, AfterViewChecked, SimpleChanges, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { DataTable } from '../data-table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnChanges, AfterViewChecked {
  @Input() dataTable: DataTable;
  @Input() numPages: number;
  @Input() pageSize = 10;
  @Input() currentPage = 0;
  needUpdate = false;
  columnWidths: number[];
  rows: any[];

  @ViewChild('thead') thead: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes.dataTable;
    if (change && change.currentValue) {
      this.columnWidths = change.currentValue.columns.map(col => 0);
      this.getRows();
    }
  }

  ngAfterViewChecked(): void {
    if (!this.needUpdate) return;
    this.needUpdate = false;
    setTimeout(() => {
      this.updateColumnWidths();
    }, 1);
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
        this.needUpdate = true;
        this.rows = rows;
      });
  }

  private updateColumnWidths(): void {
    if (!this.thead) return;
    let elt = this.thead.nativeElement;
    let cells = elt.querySelectorAll('tr:first-child th');
    cells.forEach((cell, i) => {
      let box = cell.getBoundingClientRect();
      if (i >= this.columnWidths.length || box.width > this.columnWidths[i]) {
        this.columnWidths[i] = box.width;
      }
    });
  }
}
