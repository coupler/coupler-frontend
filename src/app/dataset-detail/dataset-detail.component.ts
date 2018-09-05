import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Dataset, DatasetKind } from '../dataset';
import { DatasetService } from '../dataset.service';
import { Migration } from '../migration';
import { MigrationService } from '../migration.service';
import { CsvImport } from '../csv-import';
import { CsvImportService } from '../csv-import.service';
import { ClientError } from '../errors';

@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.css']
})
export class DatasetDetailComponent implements OnInit {
  clientError: ClientError;
  dataset: Dataset;
  migration: Migration;
  csvImport: CsvImport;

  detailsHidden = true;

  constructor(
    private datasetService: DatasetService,
    private migrationService: MigrationService,
    private csvImportService: CsvImportService,
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
          if (this.dataset.migrationId) {
            this.getMigration();
          }
          if (this.dataset.csvImportId) {
            this.getCsvImport();
          }
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
      });
  }

  getMigration(): void {
    this.migrationService.getMigration(this.dataset.migrationId).subscribe(result => {
      if (result instanceof Migration) {
        this.migration = result;
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }

  getCsvImport(): void {
    this.csvImportService.getCsvImport(this.dataset.csvImportId).subscribe(result => {
      if (result instanceof CsvImport) {
        this.csvImport = result;
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }

  downloadCsvUrl(): string {
    if (this.dataset.csvImportId) {
      return this.csvImportService.downloadCsvImportUrl(this.dataset.csvImportId);
    } else {
      return '';
    }
  }

  toggleDetails(): void {
    this.detailsHidden = !this.detailsHidden;
  }

  goBack(): void {
    this.location.back();
  }
}
