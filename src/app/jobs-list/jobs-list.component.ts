import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Job } from '../job';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent {
  @Input() jobs: Job[];
  @Input() showType = true;

  constructor(private router: Router) { }

  gotoDetail(job: Job): void {
    this.router.navigate(['/jobs', job.id]);
  }
}
