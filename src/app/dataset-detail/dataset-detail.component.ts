import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Dataset, DatasetKind } from '../dataset';
import { DatasetService } from '../dataset.service';
import { ClientError } from '../errors';

@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.css']
})
export class DatasetDetailComponent implements OnInit {
  clientError: ClientError;
  dataset: Dataset;

  constructor(
    private datasetService: DatasetService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.datasetService.getDataset(+params['id'], true);
      })).
      subscribe(result => {
        if (result instanceof Dataset) {
          this.dataset = result;
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
      });
  }

  goBack(): void {
    this.location.back();
  }
}
