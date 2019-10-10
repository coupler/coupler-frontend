import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Linkage } from '../linkage';
import { LinkageResult } from '../linkage-result';
import { LinkageResultService } from '../linkage-result.service';
import { LinkageMatch } from '../linkage-match';
import { LinkageMatchService } from '../linkage-match.service';
import { DataColumn } from '../data-table';
import { Job } from '../job';
import { ClientError } from '../errors';

@Component({
  selector: 'app-linkage-result-detail',
  templateUrl: './linkage-result-detail.component.html',
  styleUrls: ['./linkage-result-detail.component.css']
})
export class LinkageResultDetailComponent implements OnInit {
  linkageResult: LinkageResult;
  linkage: Linkage;
  job: Job;
  fields1: DataColumn[];
  fields2: DataColumn[];
  selfLinkage: boolean;
  currentMatch: LinkageMatch;
  clientError: ClientError;
  matchIndex = 0;

  constructor(
    private linkageResultService: LinkageResultService,
    private linkageMatchService: LinkageMatchService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.linkageResultService.getLinkageResult(+params['id']);
      })).
      subscribe(result => {
        if (result instanceof LinkageResult) {
          this.linkageResult = result;

          let linkage = this.linkage = result.linkage as Linkage;
          this.fields1 = linkage.dataset1.fields;
          this.fields2 = linkage.dataset2.fields;
          this.selfLinkage = linkage.dataset1Id == linkage.dataset2Id;
          this.job = result.job;
          this.getMatch();
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
      });
  }

  getMatch(): void {
    this.linkageMatchService.
      getLinkageMatch(this.linkageResult.id, this.matchIndex).
      subscribe(result => {
        if (result instanceof LinkageMatch) {
          this.currentMatch = result;
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
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
