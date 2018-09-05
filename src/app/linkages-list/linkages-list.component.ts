import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Linkage } from '../linkage';

@Component({
  selector: 'app-linkages-list',
  templateUrl: './linkages-list.component.html',
  styleUrls: ['./linkages-list.component.css']
})
export class LinkagesListComponent implements OnInit {
  @Input() linkages: Linkage[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/linkages', id]);
  }
}
