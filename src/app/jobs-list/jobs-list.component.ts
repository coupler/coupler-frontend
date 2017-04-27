import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Linkage } from '../linkage';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent {
  @Input() linkage: Linkage;

  constructor(private router: Router) { }

  gotoDetail(id: number): void {
    this.router.navigate(['/linkages', this.linkage.id, 'jobs', id]);
  }
}
