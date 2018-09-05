import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Dataset } from '../dataset';

@Component({
  selector: 'app-datasets-list',
  templateUrl: './datasets-list.component.html',
  styleUrls: ['./datasets-list.component.css']
})
export class DatasetsListComponent {
  @Input() datasets: Dataset[] = [];

  constructor(private router: Router) { }

  gotoDetail(dataset: Dataset): void {
    if (!dataset.pending) {
      this.router.navigate(['/datasets', dataset.id]);
    }
  }
}
