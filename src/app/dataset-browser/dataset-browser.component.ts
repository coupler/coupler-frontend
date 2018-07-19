import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { ClientError, ValidationError } from '../errors';
import { Dataset, DatasetKind } from '../dataset';
import { DataColumnType, DataColumn, DataTable } from '../data-table';
import { DatasetService } from '../dataset.service';

@Component({
  selector: 'app-dataset-browser',
  templateUrl: './dataset-browser.component.html',
  styleUrls: ['./dataset-browser.component.css']
})
export class DatasetBrowserComponent implements OnInit {
  clientError: ClientError;
  validationError: ValidationError;
  dataset: Dataset;
  dataTable: DataTable;
  pageSize = 10;
  numPages: number;
  numRecords: number;

  constructor(
    private datasetService: DatasetService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.datasetService.getDataset(+params['id'], true);
      })).
      subscribe(result => {
        if (result instanceof Dataset) {
          this.dataset = result;
          this.setupRecordCount();
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
      });
  }

  goBack(): void {
    this.location.back();
  }

  private setupRecordCount(): void {
    this.datasetService.countRecords(this.dataset.id).subscribe(result => {
      if (result instanceof ClientError) {
        this.clientError = result;
      } else {
        this.numRecords = result;
        this.numPages = Math.ceil(result / this.pageSize);
        this.setupDataTable();
      }
    });
  }

  private setupDataTable(): void {
    this.dataTable = new DataTable(this.dataset.fields, this.numRecords);
    this.dataTable.onFetch.subscribe(params => {
      this.datasetService.
        getRecords(this.dataset.id, params.offset, params.limit).
        subscribe(result => {
          if (result instanceof ClientError) {
            this.clientError = result;
          } else if (result instanceof ValidationError) {
            this.validationError = result;
          } else {
            params.done.emit(result);
          }
        });
    });
  }
}
