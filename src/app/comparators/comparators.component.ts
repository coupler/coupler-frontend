import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Linkage } from '../linkage';
import { LinkageService } from '../linkage.service';

@Component({
  selector: 'app-comparators',
  templateUrl: './comparators.component.html',
  styleUrls: ['./comparators.component.css']
})
export class ComparatorsComponent implements OnInit {
  @Input() linkage: Linkage;

  constructor(
    private linkageService: LinkageService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.linkage) {
      this.route.params.
        switchMap((params: Params) => {
          return this.linkageService.getLinkage(+params['linkageId']);
        }).
        subscribe(linkage => this.linkage = linkage);
    }
  }

  goBack(): void {
    this.router.navigate(['/linkages', this.linkage.id]);
  }

  newComparator(): void {
    this.router.navigate(['/linkages', this.linkage.id, 'comparators', 'new']);
  }
}
