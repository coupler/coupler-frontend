import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Dataset, DatasetKind } from '../dataset';
import { DatasetService } from '../dataset.service';
import { ClientError, ValidationError } from '../errors';
import { DataColumnType, DataColumn, DataTable } from '../data-table';

@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.css']
})
export class DatasetDetailComponent implements OnInit {
  dataset: Dataset;
  clientError: ClientError;
  validationError: ValidationError;
  dataTable: DataTable;
  numPages: number;

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
          this.setupDataTable();
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
      });
  }

  setupDataTable(): void {
    let dataTable = new DataTable(this.dataset.fields);
    this.datasetService.getRecords(this.dataset.id, 10, 0).subscribe(result => {
      if (result instanceof ClientError) {
        this.clientError = result;
      } else if (result instanceof ValidationError) {
        this.validationError = result;
      } else {
        dataTable.addRows(result);
        this.dataTable = dataTable;
      }
    });
  }

  edit(): void {
    this.router.navigate(['/datasets', this.dataset.id, 'edit']);
  }
}
