import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Migration } from '../migration';
import { MigrationService } from '../migration.service';
import { ClientError } from '../errors';

@Component({
  selector: 'app-migration-detail',
  templateUrl: './migration-detail.component.html',
  styleUrls: ['./migration-detail.component.css']
})
export class MigrationDetailComponent implements OnInit {
  clientError: ClientError;
  migration: Migration;

  constructor(
    private migrationService: MigrationService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.migrationService.getMigration(+params['id']);
      })).
      subscribe(result => {
        if (result instanceof Migration) {
          this.migration = result;
        } else if (result instanceof ClientError) {
          this.clientError = result;
        }
      });
  }

  goBack(): void {
    this.location.back();
  }
}
