import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Linkage } from '../linkage';
import { Comparator } from '../comparator';
import { LinkageService } from '../linkage.service';
import { ComparatorService } from '../comparator.service';
import { ClientError, ValidationError } from '../errors';

@Component({
  selector: 'app-comparator-form',
  templateUrl: './comparator-form.component.html',
  styleUrls: ['./comparator-form.component.css']
})
export class ComparatorFormComponent implements OnInit {
  linkage: Linkage;
  comparatorId: string;
  comparator: Comparator;
  clientError: ClientError;
  validationError: ValidationError;

  constructor(
    private linkageService: LinkageService,
    private comparatorService: ComparatorService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        this.comparatorId = params['id'];
        return this.linkageService.getLinkage(+params['linkageId']);
      })).
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
          this.clientError = result;
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
    let obs;
    if (this.comparator.id) {
      obs = this.comparatorService.update(this.comparator);
    } else {
      obs = this.comparatorService.create(this.comparator);
    }
    obs.subscribe(result => {
      if (result instanceof Comparator) {
        this.goBack();
      } else if (result instanceof ClientError) {
        this.clientError = result;
      } else if (result instanceof ValidationError) {
        this.validationError = result;
      }
    });
  }

  confirm(prompt: string): boolean {
    return window.confirm(prompt);
  }

  delete(): void {
    this.comparatorService.delete(this.comparator).subscribe(result => {
      if (result instanceof Comparator) {
        this.goBack();
      } else if (result instanceof ClientError) {
        this.clientError = result;
      } else if (result instanceof ValidationError) {
        this.validationError = result;
      }
    });
  }
}
