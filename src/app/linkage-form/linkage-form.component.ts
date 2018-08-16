import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { of as observableOf, empty, Observable } from 'rxjs';
import { switchMap, flatMap } from 'rxjs/operators';

import { Linkage } from '../linkage';
import { Dataset } from '../dataset';
import { Comparator } from '../comparator';
import { LinkageService } from '../linkage.service';
import { DatasetService } from '../dataset.service';
import { ComparatorService } from '../comparator.service';
import { ClientError, ValidationError } from '../errors';

@Component({
  selector: 'app-linkage-form',
  templateUrl: './linkage-form.component.html',
  styleUrls: ['./linkage-form.component.css']
})
export class LinkageFormComponent implements OnInit {
  linkage: Linkage;
  comparator: Comparator;
  editIndex: number;
  datasets: Dataset[] = [];
  clientError: ClientError;
  validationError: ValidationError;
  linkageType: string;
  deletedComparatorIds: number[] = [];

  @ViewChild('comparatorsTabset') comparatorsTabset: NgbTabset;

  constructor(
    private linkageService: LinkageService,
    private datasetService: DatasetService,
    private comparatorService: ComparatorService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.datasetService.getDatasets(true).subscribe(result => {
      if (result instanceof Array) {
        this.datasets = result;
        this.getLinkage();
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }

  datasetChanged(): void {
    if (this.linkageType == "single") {
      this.linkage.dataset2Id = this.linkage.dataset1Id;
    }
    this.linkage.dataset1 = this.datasets.find(dataset => dataset.id == this.linkage.dataset1Id);
    this.linkage.dataset2 = this.datasets.find(dataset => dataset.id == this.linkage.dataset2Id);
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
          if (this.linkage.comparators.length == 0) {
            this.newComparator();
          }
          if (this.linkage.dataset1Id == this.linkage.dataset2Id) {
            this.linkageType = 'single';
          } else {
            this.linkageType = 'dual';
          }
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
      });
  }

  newComparator(): void {
    this.comparator = new Comparator();
    this.comparator.linkageId = this.linkage.id;
    setTimeout(() => {
      if (this.comparatorsTabset) {
        this.comparatorsTabset.select('linkage-new-comparator');
      }
    }, 10);
  }

  addComparator(): void {
    this.linkage.comparators.push(this.comparator);
    this.comparator = undefined;
  }

  editComparator(index: number): void {
    this.editIndex = index;
  }

  cancelEditComparator(): void {
    // values are reset by comparator form
    this.editIndex = undefined;
  }

  finishEditComparator(): void {
    this.editIndex = undefined;
  }

  removeComparator(): void {
    if (this.editIndex !== undefined) {
      let comparator = this.linkage.comparators[this.editIndex];
      if (comparator.id !== undefined) {
        this.deletedComparatorIds.push(comparator.id);
      }
      this.linkage.comparators.splice(this.editIndex, 1);
      this.editIndex = undefined;
    } else {
      this.comparator = undefined;
    }
  }

  saveLinkage(): void {
    let obs;
    if (this.linkage.id) {
      obs = this.linkageService.update(this.linkage);
    } else {
      obs = this.linkageService.create(this.linkage);
    }
    obs.subscribe(result => {
      if (result instanceof Linkage) {
        this.saveComparators();
      } else if (result instanceof ClientError) {
        this.clientError = result;
      } else if (result instanceof ValidationError) {
        this.validationError = result;
      }
    });
  }

  saveComparators(): void {
    let obs;
    this.linkage.comparators.forEach((comparator, i) => {
      comparator.linkageId = this.linkage.id;

      let op;
      if (comparator.id) {
        op = this.comparatorService.update(comparator);
      } else {
        op = this.comparatorService.create(comparator);
      }
      if (i == 0) {
        obs = op;
      } else {
        obs = obs.pipe(flatMap(op));
      }
    });
    obs.subscribe(result => {
      if (result instanceof Comparator) {
        this.router.navigate(['linkages', this.linkage.id]);
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
}
