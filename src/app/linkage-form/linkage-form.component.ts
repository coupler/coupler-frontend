import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { of as observableOf,  Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Linkage } from '../linkage';
import { Dataset } from '../dataset';
import { Comparator } from '../comparator';
import { LinkageService } from '../linkage.service';
import { DatasetService } from '../dataset.service';
import { ClientError, ValidationError } from '../errors';

@Component({
  selector: 'app-linkage-form',
  templateUrl: './linkage-form.component.html',
  styleUrls: ['./linkage-form.component.css']
})
export class LinkageFormComponent implements OnInit {
  linkage: Linkage;
  datasets: Dataset[] = [];
  clientError: ClientError;
  validationError: ValidationError;

  constructor(
    private linkageService: LinkageService,
    private datasetService: DatasetService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.datasetService.getDatasets().subscribe(result => {
      if (result instanceof Array) {
        this.datasets = result;
        this.getLinkage();
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }

  getLinkage(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        if (!params['id']) {
          return observableOf<Linkage>(new Linkage());
        } else {
          return this.linkageService.getLinkage(+params['id']);
        }
      })).
      subscribe(result => {
        if (result instanceof Linkage) {
          this.linkage = result;
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
      });
  }

  save(): void {
    let obs;
    if (this.linkage.id) {
      obs = this.linkageService.update(this.linkage);
    } else {
      obs = this.linkageService.create(this.linkage);
    }
    obs.subscribe(result => {
      if (result instanceof Linkage) {
        this.goNext();
      } else if (result instanceof ClientError) {
        this.clientError = result;
      } else if (result instanceof ValidationError) {
        this.validationError = result;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  goNext(): void {
    this.router.navigate(['/linkages', this.linkage.id, 'comparators']);
  }
}
