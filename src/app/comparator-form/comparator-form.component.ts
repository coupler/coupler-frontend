import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { Linkage } from '../linkage';
import { Comparator } from '../comparator';
import { LinkageService } from '../linkage.service';
import { ComparatorService } from '../comparator.service';

@Component({
  selector: 'app-comparator-form',
  templateUrl: './comparator-form.component.html',
  styleUrls: ['./comparator-form.component.css']
})
export class ComparatorFormComponent implements OnInit {
  linkage: Linkage;
  comparatorId: string;
  comparator: Comparator;

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
      subscribe(linkage => {
        this.linkage = linkage;
        if (this.comparatorId == 'new') {
          this.comparator = new Comparator();
          this.comparator.linkageId = this.linkage.id;
        } else {
          this.comparator = linkage.findComparator(+this.comparatorId);
        }
      });
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
