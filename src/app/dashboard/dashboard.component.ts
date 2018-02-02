import { Component, OnInit } from '@angular/core';

import { Job } from '../job';
import { JobService } from '../job.service';
import { ClientError } from '../errors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobs: Job[];
  clientError: ClientError;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe(result => {
      if (result instanceof Array) {
        /* sort by newest */
        result.sort((a, b) => {
          if (a.startedAt < b.startedAt) {
            return -1;
          }
          if (b.startedAt < a.startedAt) {
            return 1;
          }
          return 0;
        });
        this.jobs = result;
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }
}
