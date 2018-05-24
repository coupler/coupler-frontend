import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap } from 'rxjs/operators';

import { Linkage } from '../linkage';
import { Job } from '../job';
import { LinkageService } from '../linkage.service';
import { JobService } from '../job.service';
import { ClientError } from '../errors';

@Component({
  selector: 'app-linkage-detail',
  templateUrl: './linkage-detail.component.html',
  styleUrls: ['./linkage-detail.component.css']
})
export class LinkageDetailComponent implements OnInit {
  linkage: Linkage;
  clientError: ClientError;

  @ViewChild('deleteConfirmation') confirmDeletionContent: TemplateRef<any>;

  constructor(
    private linkageService: LinkageService,
    private jobService: JobService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.linkageService.getLinkage(+params['id']);
      })).
      subscribe(result => {
        if (result instanceof Linkage) {
          this.linkage = result;
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
      });
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.router.navigate(['/linkages', this.linkage.id, 'edit']);
  }

  confirmDeletion(): void {
    this.modalService.open(this.confirmDeletionContent).
      result.then(result => {
        this.delete();
      }, reason => { });
  }

  delete(): void {
    this.linkageService.delete(this.linkage).subscribe(result => {
      if (result instanceof Linkage) {
        this.goBack();
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }

  createJob(): void {
    let job = new Job();
    job.kind = "linkage";
    job.linkageId = this.linkage.id;

    this.jobService.create(job).subscribe(result => {
      if (result instanceof Job) {
        this.router.navigate(['/linkages', this.linkage.id, 'jobs', result.id]);
      } else if (result instanceof ClientError) {
        this.clientError = result;
      }
    });
  }
}
