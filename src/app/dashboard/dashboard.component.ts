import { Component, OnInit } from '@angular/core';

import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobs: Job[];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobs().
      then(jobs => {
        this.jobs = jobs.sort((a, b) => {
          if (a.startedAt < b.startedAt) {
            return -1;
          }
          if (b.startedAt < a.startedAt) {
            return 1;
          }
          return 0;
        });
      });
  }

}
