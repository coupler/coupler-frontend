import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LinkageService, LinkageError } from '../linkage.service';
import { Linkage } from '../linkage';

@Component({
  selector: 'app-linkages',
  templateUrl: './linkages.component.html',
  styleUrls: ['./linkages.component.css']
})
export class LinkagesComponent implements OnInit {
  linkages: Linkage[];
  error: LinkageError;
  showError = false;

  constructor(
    private linkageService: LinkageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.linkageService.getLinkages().subscribe(result => {
      if (result instanceof Array) {
        this.linkages = result;
      } else {
        this.error = result;
      }
    });
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/linkages', id]);
  }

  newLinkage(): void {
    this.router.navigate(['/linkages', 'new']);
  }
}
