import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { Linkage } from '../linkage';
import { Dataset } from '../dataset';
import { Comparator } from '../comparator';
import { LinkageService, LinkageError } from '../linkage.service';
import { DatasetService, DatasetError } from '../dataset.service';

@Component({
  selector: 'app-linkage-form',
  templateUrl: './linkage-form.component.html',
  styleUrls: ['./linkage-form.component.css']
})
export class LinkageFormComponent implements OnInit {
  linkage: Linkage;
  linkageError: LinkageError;
  datasets: Dataset[] = [];
  datasetError: DatasetError;
  showError = false;

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
      } else {
        this.datasetError = result;
      }
    });
  }

  getLinkage(): void {
    this.route.params.
      switchMap((params: Params) => {
        if (!params['id']) {
          return Observable.of<Linkage>(new Linkage());
        } else {
          return this.linkageService.getLinkage(+params['id']);
        }
      }).
      subscribe(result => {
        if (result instanceof Linkage) {
          this.linkage = result;
        } else {
          this.linkageError = result;
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
      } else {
        this.linkageError = result;
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
