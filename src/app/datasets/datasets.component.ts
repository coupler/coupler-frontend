import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DatasetService } from '../dataset.service';
import { Dataset } from '../dataset';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})
export class DatasetsComponent implements OnInit {
  datasets: Dataset[];

  constructor(
    private datasetService: DatasetService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDatasets();
  }

  getDatasets(): void {
    this.datasetService.
      getDatasets().
      then(datasets => this.datasets = datasets);
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/datasets', id]);
  }
}
