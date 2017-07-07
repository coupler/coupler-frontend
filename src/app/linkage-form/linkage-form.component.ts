import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { Linkage } from '../linkage';
import { Dataset } from '../dataset';
import { Comparator } from '../comparator';
import { LinkageService } from '../linkage.service';
import { DatasetService } from '../dataset.service';
import { ComparatorService } from '../comparator.service';

@Component({
  selector: 'app-linkage-form',
  templateUrl: './linkage-form.component.html',
  styleUrls: ['./linkage-form.component.css']
})
export class LinkageFormComponent implements OnInit {
  linkage: Linkage;
  datasets: Dataset[] = [];
  error: any;
  showError = false;

  constructor(
    private linkageService: LinkageService,
    private datasetService: DatasetService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDatasets().
      then(() => this.getLinkage());
  }

  getDatasets(): Promise<any> {
    return this.datasetService.getDatasets().
      then(
        datasets => this.datasets = datasets,
        error => this.error = error
      );
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
      subscribe(
        linkage => this.linkage = linkage,
        error => this.error = error
      );
  }

  save(): void {
    let promise;
    if (this.linkage.id) {
      promise = this.linkageService.update(this.linkage);
    } else {
      promise = this.linkageService.create(this.linkage);
    }
    promise.then(result => {
      this.linkage.id = result.id;
      this.goNext()
    });
  }

  goBack(): void {
    this.location.back();
  }

  goNext(): void {
    this.router.navigate(['/linkages', this.linkage.id, 'comparators']);
  }
}
