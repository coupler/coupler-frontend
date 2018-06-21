import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Dataset, DatasetKind } from '../dataset';
import { DatasetService } from '../dataset.service';
import { ClientError, ValidationError } from '../errors';

@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.css']
})
export class DatasetDetailComponent implements OnInit {
  dataset: Dataset;
  clientError: ClientError;
  validationError: ValidationError;

  constructor(
    private datasetService: DatasetService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.datasetService.getDataset(+params['id'], false);
      })).
      subscribe(result => {
        if (result instanceof Dataset) {
          this.dataset = result;
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
      });
  }

  edit(): void {
    this.router.navigate(['/datasets', this.dataset.id, 'edit']);
  }
}
