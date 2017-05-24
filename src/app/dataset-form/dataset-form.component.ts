import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { Dataset } from '../dataset';
import { DatasetService } from '../dataset.service';

@Component({
  selector: 'app-dataset-form',
  templateUrl: './dataset-form.component.html',
  styleUrls: ['./dataset-form.component.css']
})
export class DatasetFormComponent implements OnInit {
  dataset: Dataset;
  errors: any;

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
          return this.datasetService.getDataset(+params['id']);
        }
      }).
      subscribe(dataset => this.dataset = dataset);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    let promise;
    if (this.dataset.id) {
      promise = this.datasetService.update(this.dataset);
    } else {
      promise = this.datasetService.create(this.dataset);
    }
    promise.then(
      result => {
        this.goBack();
      },
      result => {
        let errors = [];
        for (let key in result.errors) {
          let keyErrors = result.errors[key];
          keyErrors.forEach(error => {
            if (key == "base") {
              errors.push(error);
            } else {
              errors.push(`${key} ${error}`);
            }
          });
        }
        this.errors = errors;
      }
    );
  }
}
