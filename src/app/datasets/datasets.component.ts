import { Component, OnInit } from '@angular/core';

import { DatasetService } from '../dataset.service';
import { Dataset } from '../dataset';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})
export class DatasetsComponent implements OnInit {
  datasets: Dataset[];

  constructor(private datasetService: DatasetService) { }

  ngOnInit() {
    this.getDatasets();
  }

  getDatasets(): void {
    this.datasetService.
      getDatasets().
      then(datasets => this.datasets = datasets);
  }
}
