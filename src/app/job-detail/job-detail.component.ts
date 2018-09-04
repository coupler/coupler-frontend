import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Linkage } from '../linkage';
import { Job } from '../job';
import { LinkageService } from '../linkage.service';
import { JobService } from '../job.service';
import { ClientError } from '../errors';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit, OnDestroy {
  job: Job;
  linkage: Linkage;
  clientError: ClientError;
  private refreshTimer: number;

  constructor(
    private jobService: JobService,
    private linkageService: LinkageService,
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
