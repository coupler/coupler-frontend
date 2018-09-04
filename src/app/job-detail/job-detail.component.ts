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
  clientError: ClientError;
  private refreshTimer: number;

  constructor(
    private jobService: JobService,
    private linkageService: LinkageService,
    private migrationService: MigrationService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.jobService.getJob(+params['id']);
      })).
      subscribe(result => {
        if (result instanceof Job) {
          this.job = result;
          if (this.job.status == "running" || this.job.status == "initialized") {
            this.refreshTimer = setTimeout(this.refresh.bind(this), 1000);
          }

          if (this.job.kind === 'linkage') {
            this.getLinkage();
          } else if (this.job.kind === 'migration') {
            this.getMigration();
          }
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
      });
  }

  ngOnDestroy(): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }
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

  goBack(): void {
    this.location.back();
  }

  refresh(): void {
    this.jobService.getJob(this.job.id).subscribe(result => {
      if (result instanceof Job) {
        this.job = result;
        if (this.job.status == "running" || this.job.status == "initialized") {
          this.refreshTimer = setTimeout(this.refresh.bind(this), 1000);
        } else {
          this.refreshTimer = undefined;
        }
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }
}
