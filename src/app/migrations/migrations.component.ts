import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MigrationService } from '../migration.service';
import { DatasetService } from '../dataset.service';
import { Migration } from '../migration';
import { Dataset } from '../dataset';
import { ClientError } from '../errors';

@Component({
  selector: 'app-migrations',
  templateUrl: './migrations.component.html',
  styleUrls: ['./migrations.component.css']
})
export class MigrationsComponent implements OnInit {
  datasets: Dataset[];
  migrations: Migration[];
  clientError: ClientError;

  constructor(
    private migrationService: MigrationService,
    private datasetService: DatasetService
  ) { }

  ngOnInit() {
    this.getDatasets().subscribe(result => {
      if (result) {
        this.getMigrations();
      }
    });
  }

  getDatasets(): Observable<boolean> {
    return this.datasetService.getDatasets().pipe(
      map(result => {
        if (result instanceof Array) {
          this.datasets = result;
          return true;
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
        return false;
      })
    );
  }

  getMigrations(): void {
    this.migrationService.getMigrations().subscribe(result => {
      if (result instanceof Array) {
        result.forEach(m => {
          m.inputDataset = this.datasets.find(d => d.id == m.inputDatasetId);
          m.outputDataset = this.datasets.find(d => d.id == m.outputDatasetId);
        });
        this.migrations = result;
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }
}
