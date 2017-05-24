import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/add/operator/switchMap';

import { Linkage } from '../linkage';
import { Job } from '../job';
import { LinkageService } from '../linkage.service';
import { JobService } from '../job.service';

@Component({
  selector: 'app-linkage-detail',
  templateUrl: './linkage-detail.component.html',
  styleUrls: ['./linkage-detail.component.css']
})
export class LinkageDetailComponent implements OnInit {
  linkage: Linkage;

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

  confirmDeletion(): void {
    this.modalService.open(this.confirmDeletionContent).
      result.then(result => {
        this.delete();
      }, reason => { });
  }

  delete(): void {
    this.linkageService.delete(this.linkage).
      then(() => { this.goBack() });
  }

  createJob(): void {
    let job = new Job();
    job.kind = "linkage";
    job.linkageId = this.linkage.id;

    this.jobService.create(job).
      then(result => {
        job.id = result.id;
        this.router.navigate(['/linkages', this.linkage.id, 'jobs', job.id]);
      });
  }
}
