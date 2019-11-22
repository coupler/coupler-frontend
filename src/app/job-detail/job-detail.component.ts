import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Job } from '../job';
import { JobService } from '../job.service';
import { Linkage } from '../linkage';
import { LinkageService } from '../linkage.service';
import { Migration } from '../migration';
import { MigrationService } from '../migration.service';
import { LinkageResult } from '../linkage-result';
import { LinkageResultService } from '../linkage-result.service';
import { Dataset } from '../dataset';
import { DatasetService } from '../dataset.service';
import { DatasetExport } from '../dataset-export';
import { DatasetExportService } from '../dataset-export.service';

import { ClientError } from '../errors';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit, OnDestroy {
  job: Job;
  linkage?: Linkage;
  migration?: Migration;
  linkageResult?: LinkageResult;
  dataset?: Dataset;
  datasetExport?: DatasetExport;
  clientError: ClientError;
  private refreshTimer: number;

  constructor(
    private jobService: JobService,
    private linkageService: LinkageService,
    private migrationService: MigrationService,
    private linkageResultService: LinkageResultService,
    private datasetService: DatasetService,
    private datasetExportService: DatasetExportService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getJob(+params['id']);
    });
  }

  ngOnDestroy(): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }
  }

  getJob(id: number): void {
    this.jobService.getJob(id).subscribe(result => {
      if (result instanceof Job) {
        this.job = result;

        // Update job every second if it's still running
        if (this.job.status == "running" || this.job.status == "initialized") {
          this.refreshTimer = setTimeout(this.getJob.bind(this, this.job.id), 1000);
        } else {
          this.refreshTimer = undefined;
        }

        if (this.job.kind === 'linkage') {
          this.getLinkage();

          if (typeof(this.job.linkageResultId) == 'number' && this.job.status == "finished") {
            this.getLinkageResult();
          }
        } else if (this.job.kind === 'migration') {
          this.getMigration();
        } else if (this.job.kind === 'linkage_result_export') {
          this.getLinkageResult();

          if (typeof(this.job.datasetId) == 'number' && this.job.status == 'finished') {
            this.getDataset();
          }
        } else if (this.job.kind == 'dataset_export') {
          this.getDataset();

          if (typeof(this.job.datasetExportId) == 'number' && this.job.status == 'finished') {
            this.getDatasetExport();
          }
        }
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }

  getLinkage(): void {
    this.linkageService.getLinkage(this.job.linkageId).subscribe(result => {
      if (result instanceof Linkage) {
        this.linkage = result;
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }

  getMigration(): void {
    this.migrationService.getMigration(this.job.migrationId).subscribe(result => {
      if (result instanceof Migration) {
        this.migration = result;
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }

  getLinkageResult(): void {
    this.linkageResultService.getLinkageResult(this.job.linkageResultId).subscribe(result => {
      if (result instanceof LinkageResult) {
        this.linkageResult = result;
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }

  getDataset(): void {
    this.datasetService.getDataset(this.job.datasetId).subscribe(result => {
      if (result instanceof Dataset) {
        this.dataset = result;
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }

  getDatasetExport(): void {
    this.datasetExportService.getDatasetExport(this.job.datasetExportId).subscribe(result => {
      if (result instanceof DatasetExport) {
        this.datasetExport = result;
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }

  downloadDatasetExportUrl(): string {
    return this.datasetExportService.downloadDatasetExportUrl(this.datasetExport.id);
  }

  goBack(): void {
    this.location.back();
  }
}
