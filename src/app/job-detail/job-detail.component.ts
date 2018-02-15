import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

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
  linkage: Linkage;
  jobId: string;
  job: Job;
  clientError: ClientError;
  private refreshTimer: number;

  constructor(
    private linkageService: LinkageService,
    private jobService: JobService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.
      switchMap((params: Params) => {
        this.jobId = params['id'];
        return this.linkageService.getLinkage(+params['linkageId']);
      }).
      subscribe(result => {
        if (result instanceof Linkage) {
          this.linkage = result;
          this.job = this.linkage.findJob(+this.jobId);
          if (this.job.status == "running" || this.job.status == "initialized") {
            this.refreshTimer = setTimeout(this.refresh.bind(this), 1000);
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
