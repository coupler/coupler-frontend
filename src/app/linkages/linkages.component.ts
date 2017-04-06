import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LinkageService } from '../linkage.service';
import { Linkage } from '../linkage';

@Component({
  selector: 'app-linkages',
  templateUrl: './linkages.component.html',
  styleUrls: ['./linkages.component.css']
})
export class LinkagesComponent implements OnInit {
  linkages: Linkage[];

  constructor(
    private linkageService: LinkageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getLinkages();
  }

  getLinkages(): void {
    this.linkageService.
      getLinkages().
      then(linkages => this.linkages = linkages);
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/linkages', id]);
  }

  newLinkage(): void {
    this.router.navigate(['/linkages', 'new']);
  }
}
