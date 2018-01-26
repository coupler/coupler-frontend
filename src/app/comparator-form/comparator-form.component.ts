import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { Linkage } from '../linkage';
import { Comparator } from '../comparator';
import { LinkageService, LinkageError } from '../linkage.service';
import { ComparatorService, ComparatorError } from '../comparator.service';

@Component({
  selector: 'app-comparator-form',
  templateUrl: './comparator-form.component.html',
  styleUrls: ['./comparator-form.component.css']
})
export class ComparatorFormComponent implements OnInit {
  linkage: Linkage;
  linkageError: LinkageError;
  comparatorId: string;
  comparator: Comparator;
  comparatorError: ComparatorError;

  constructor(
    private linkageService: LinkageService,
    private comparatorService: ComparatorService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.
      switchMap((params: Params) => {
        this.comparatorId = params['id'];
        return this.linkageService.getLinkage(+params['linkageId']);
      }).
      subscribe(result => {
        if (result instanceof Linkage) {
          this.linkage = result;
          if (this.comparatorId == 'new') {
            this.comparator = new Comparator();
            this.comparator.linkageId = this.linkage.id;
            this.addRow();
          } else {
            this.comparator = this.linkage.findComparator(+this.comparatorId);
          }
        } else {
          this.linkageError = result;
        }
      });
  }

  addRow(): void {
    this.comparator.sets.push({ field1: "", field2: "" });
  }

  removeRow(index: number): void {
    this.comparator.sets.splice(index, 1);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    let promise;
    if (this.comparator.id) {
      promise = this.comparatorService.update(this.comparator);
    } else {
      promise = this.comparatorService.create(this.comparator);
    }
    promise.then(() => this.goBack());
  }
}
