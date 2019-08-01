import { Component, OnInit, Input } from '@angular/core';

import { LinkageMatch } from '../linkage-match';
import { DataColumn } from '../data-table';

@Component({
  selector: 'app-linkage-match-detail',
  templateUrl: './linkage-match-detail.component.html',
  styleUrls: ['./linkage-match-detail.component.css']
})
export class LinkageMatchDetailComponent implements OnInit {
  @Input() match: LinkageMatch;
  @Input() fields1: DataColumn[]
  @Input() fields2: DataColumn[]
  @Input() selfLinkage: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
