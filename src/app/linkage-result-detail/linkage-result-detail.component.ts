import { Component, OnInit, Input } from '@angular/core';

import { Linkage } from '../linkage';
import { LinkageResult } from '../linkage-result';
import { LinkageMatch } from '../linkage-match';
import { LinkageMatchService } from '../linkage-match.service';

@Component({
  selector: 'app-linkage-result-detail',
  templateUrl: './linkage-result-detail.component.html',
  styleUrls: ['./linkage-result-detail.component.css']
})
export class LinkageResultDetailComponent implements OnInit {
  @Input() linkage: Linkage;
  @Input() linkageResult: LinkageResult;
  match: LinkageMatch;
  matchIndex = 0;

  constructor(private linkageMatchService: LinkageMatchService) { }

  ngOnInit(): void {
    this.getMatch();
  }

  getMatch(): void {
    this.linkageMatchService.
      getLinkageMatch(this.linkageResult.id, this.matchIndex).
      then(result => {
        this.match = result;
      });
  }

  prev(): void {
    if (this.matchIndex > 0) {
      this.matchIndex--;
      this.getMatch();
    }
  }

  next(): void {
    if (this.matchIndex < this.linkageResult.matchCount) {
      this.matchIndex++;
      this.getMatch();
    }
  }
}
