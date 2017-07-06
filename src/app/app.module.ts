import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DatasetService } from './dataset.service';
import { DatasetsComponent } from './datasets/datasets.component';
import { DatasetFormComponent } from './dataset-form/dataset-form.component';

import { LinkageService } from './linkage.service';
import { LinkagesComponent } from './linkages/linkages.component';
import { LinkageDetailComponent } from './linkage-detail/linkage-detail.component';
import { LinkageFormComponent } from './linkage-form/linkage-form.component';

import { ComparatorService } from './comparator.service';
import { ComparatorsListComponent } from './comparators-list/comparators-list.component';
import { ComparatorsComponent } from './comparators/comparators.component';
import { ComparatorFormComponent } from './comparator-form/comparator-form.component';

import { JobService } from './job.service';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { DatasetsListComponent } from './datasets-list/datasets-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

import { LinkageResultService } from './linkage-result.service';
import { LinkageResultDetailComponent } from './linkage-result-detail/linkage-result-detail.component';

import { LinkageMatchService } from './linkage-match.service';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    DashboardComponent,
    DatasetsComponent,
    DatasetFormComponent,
    LinkagesComponent,
    LinkageDetailComponent,
    LinkageFormComponent,
    ComparatorsListComponent,
    ComparatorsComponent,
    ComparatorFormComponent,
    JobsListComponent,
    DatasetsListComponent,
    JobDetailComponent,
    LinkageResultDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseUrl },
    DatasetService,
    LinkageService,
    ComparatorService,
    JobService,
    LinkageResultService,
    LinkageMatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
