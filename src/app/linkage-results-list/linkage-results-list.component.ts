import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LinkageResult } from '../linkage-result';

@Component({
  selector: 'app-linkage-results-list',
  templateUrl: './linkage-results-list.component.html',
  styleUrls: ['./linkage-results-list.component.css']
})
export class LinkageResultsListComponent {
  @Input() linkageResults: LinkageResult[];

  constructor(private router: Router) { }

  gotoDetail(linkageResult: LinkageResult): void {
    this.router.navigate(['linkages', linkageResult.linkageId, 'results', linkageResult.id]);
  }
}
