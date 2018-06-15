import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { of as observableOf,  Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Dataset, DatasetKind } from '../dataset';
import { CsvImport } from '../csv-import';
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
    this.route.params.pipe(
      switchMap((params: Params) => {
        if (params['id'] == 'new') {
          let dataset = new Dataset();
          return observableOf<Dataset>(dataset);
        } else {
          return this.datasetService.getDataset(+params['id'], false);
        }
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
        console.log('client error:', result);
        this.clientError = result;
      } else if (result instanceof ValidationError) {
        console.log('validation error:', result);
        this.validationError = result;
      } else {
        console.log('unknown error:', result);
      }
    });
  }

  csvReady(csvImport: CsvImport): void {
    this.dataset.csvImportId = csvImport.id;
    this.save();
  }
}
