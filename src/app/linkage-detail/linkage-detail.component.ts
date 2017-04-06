import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Linkage } from '../linkage';
import { LinkageService } from '../linkage.service';

@Component({
  selector: 'app-linkage-detail',
  templateUrl: './linkage-detail.component.html',
  styleUrls: ['./linkage-detail.component.css']
})
export class LinkageDetailComponent implements OnInit {
  linkage: Linkage;

  constructor(
    private linkageService: LinkageService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.
      switchMap((params: Params) => {
        return this.linkageService.getLinkage(+params['id']);
      }).
      subscribe(linkage => this.linkage = linkage);
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.router.navigate(['/linkages', this.linkage.id, 'edit']);
  }
}
