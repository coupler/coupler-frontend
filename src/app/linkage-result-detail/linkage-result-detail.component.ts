import { Component, OnInit, Input } from '@angular/core';

import { Linkage } from '../linkage';
import { LinkageResult } from '../linkage-result';
import { LinkageMatch } from '../linkage-match';
import { LinkageResultService } from '../linkage-result.service';

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

  constructor(private linkageResultService: LinkageResultService) { }

  ngOnInit(): void {
    this.getMatch();
  }

  getMatch(): void {
    this.linkageResultService.
      getMatch(this.linkageResult, this.matchIndex).
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
      this.matchIndex++
      this.getMatch();
    }
  }
}
