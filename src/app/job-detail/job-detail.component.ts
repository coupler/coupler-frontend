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

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit, OnDestroy {
  linkage: Linkage;
  jobId: string;
  job: Job;
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
      subscribe(linkage => {
        this.linkage = linkage;
        this.job = linkage.findJob(+this.jobId);
        if (this.job.status == "initialized") {
          this.refreshTimer = setTimeout(this.refresh.bind(this), 1000);
          this.run();
        } else if (this.job.status == "running") {
          this.refreshTimer = setTimeout(this.refresh.bind(this), 1000);
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

  run(): Promise<Job> {
    return this.jobService.run(this.job.id);
  }

  refresh(): void {
    this.jobService.getJob(this.job.id).
      then(updatedJob => {
        Object.assign(this.job, updatedJob);
        if (this.job.status == "running") {
          this.refreshTimer = setTimeout(this.refresh.bind(this), 1000);
        } else {
          this.refreshTimer = undefined;
        }
      });
  }
}
