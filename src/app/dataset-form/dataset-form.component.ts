import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { Dataset } from '../dataset';
import { DatasetService } from '../dataset.service';
import { ClientError, ValidationError } from '../errors';

@Component({
  selector: 'app-dataset-form',
  templateUrl: './dataset-form.component.html',
  styleUrls: ['./dataset-form.component.css']
})
export class DatasetFormComponent implements OnInit {
  dataset: Dataset;
  clientError: ClientError;
  validationError: ValidationError;

  constructor(
    private datasetService: DatasetService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.
      switchMap((params: Params) => {
        if (params['id'] == 'new') {
          return Observable.of<Dataset>(new Dataset());
        } else {
          return this.datasetService.getDataset(+params['id'], false);
        }
      }).
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

  save(): void {
    let obs;
    if (this.dataset.id) {
      obs = this.datasetService.update(this.dataset);
    } else {
      obs = this.datasetService.create(this.dataset);
    }
    obs.subscribe(result => {
      if (result instanceof Dataset) {
        this.goBack();
      } else if (result instanceof ClientError) {
        this.clientError = result;
      } else if (result instanceof ValidationError) {
        this.validationError = result;
      }
    });
  }
}
