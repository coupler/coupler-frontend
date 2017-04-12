import { Component, Input } from '@angular/core';

import { Linkage } from '../linkage';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent {
  @Input() linkage: Linkage;

  constructor() { }
}
