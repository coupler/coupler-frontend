import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DatasetService } from './dataset.service';
import { DatasetsComponent } from './datasets/datasets.component';
import { DatasetDetailComponent } from './dataset-detail/dataset-detail.component';

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

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    DashboardComponent,
    DatasetsComponent,
    DatasetDetailComponent,
    LinkagesComponent,
    LinkageDetailComponent,
    LinkageFormComponent,
    ComparatorsListComponent,
    ComparatorsComponent,
    ComparatorFormComponent,
    JobsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    DatasetService,
    LinkageService,
    ComparatorService,
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
