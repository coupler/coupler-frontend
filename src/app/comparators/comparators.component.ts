import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Linkage } from '../linkage';
import { LinkageService } from '../linkage.service';
import { ClientError } from '../errors';

@Component({
  selector: 'app-comparators',
  templateUrl: './comparators.component.html',
  styleUrls: ['./comparators.component.css']
})
export class ComparatorsComponent implements OnInit {
  @Input() linkage: Linkage;
  clientError: ClientError;

  constructor(
    private linkageService: LinkageService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.linkage) {
      this.route.params.pipe(
        switchMap((params: Params) => {
          return this.linkageService.getLinkage(+params['linkageId']);
        })).
        subscribe(result => {
          if (result instanceof Linkage) {
            this.linkage = result;
          } else if (result instanceof ClientError) {
            this.clientError = result;
          }
        });
    }
  }

  goBack(): void {
    this.router.navigate(['/linkages', this.linkage.id]);
  }

  newComparator(): void {
    this.router.navigate(['/linkages', this.linkage.id, 'comparators', 'new']);
  }
}
