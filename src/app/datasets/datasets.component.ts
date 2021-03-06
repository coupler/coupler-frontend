import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DatasetService } from '../dataset.service';
import { Dataset } from '../dataset';
import { ClientError } from '../errors';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})
export class DatasetsComponent implements OnInit {
  datasets: Dataset[];
  clientError: ClientError;

  constructor(
    private datasetService: DatasetService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDatasets();
  }

  getDatasets(): void {
    this.datasetService.getDatasets().subscribe(result => {
      if (result instanceof Array) {
        this.datasets = result;
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }

  newDataset(): void {
    this.router.navigate(['/datasets', 'new']);
  }
}
