import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Linkage } from '../linkage';
import { Job } from '../job';
import { LinkageService } from '../linkage.service';
import { JobService } from '../job.service';

@Component({
  selector: 'app-linkage-detail',
  templateUrl: './linkage-detail.component.html',
  styleUrls: ['./linkage-detail.component.css']
})
export class LinkageDetailComponent implements OnInit {
  linkage: Linkage;

  constructor(
    private linkageService: LinkageService,
    private jobService: JobService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.
      switchMap((params: Params) => {
        return this.linkageService.getLinkage(+params['id']);
      }).
      subscribe(linkage => this.linkage = linkage);
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.router.navigate(['/linkages', this.linkage.id, 'edit']);
  }

  createJob(): Promise<Job> {
    let job = new Job({
      kind: "linkage",
      linkage_id: this.linkage.id
    });
    return this.jobService.create(job);
  }

  runJob(job: Job): Promise<Job> {
    return this.jobService.run(job.id);
  }

  executeJob(): void {
    this.createJob().then(job => {
      this.linkage.jobs.push(job);
      let interval = setInterval(this.updateJob.bind(this, job), 1000);
      this.runJob(job).then(job => {
        clearInterval(interval);
      });
    });
  }

  updateJob(job: Job): void {
    this.jobService.getJob(job.id).then(updatedJob => {
      Object.assign(job, updatedJob);
    });
  }
}
