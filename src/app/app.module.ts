import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DatasetService } from './dataset.service';
import { DatasetsComponent } from './datasets/datasets.component';
import { DatasetFormComponent } from './dataset-form/dataset-form.component';
import { DatasetDetailComponent } from './dataset-detail/dataset-detail.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DatasetBrowserComponent } from './dataset-browser/dataset-browser.component';

import { LinkageService } from './linkage.service';
import { LinkagesComponent } from './linkages/linkages.component';
import { LinkageDetailComponent } from './linkage-detail/linkage-detail.component';
import { LinkageFormComponent } from './linkage-form/linkage-form.component';
import { LinkagesListComponent } from './linkages-list/linkages-list.component';

import { ComparatorService } from './comparator.service';
import { ComparatorsListComponent } from './comparators-list/comparators-list.component';
import { ComparatorsComponent } from './comparators/comparators.component';
import { ComparatorEditComponent } from './comparator-edit/comparator-edit.component';
import { ComparatorFormComponent } from './comparator-form/comparator-form.component';
import { ComparatorDetailComponent } from './comparator-detail/comparator-detail.component';

import { JobService } from './job.service';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { DatasetsListComponent } from './datasets-list/datasets-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

import { LinkageResultService } from './linkage-result.service';
import { LinkageResultDetailComponent } from './linkage-result-detail/linkage-result-detail.component';
import { LinkageResultsListComponent } from './linkage-results-list/linkage-results-list.component';

import { LinkageMatchService } from './linkage-match.service';
import { LinkageMatchDetailComponent } from './linkage-match-detail/linkage-match-detail.component';

import { MigrationFormComponent } from './migration-form/migration-form.component';
import { MigrationDetailComponent } from './migration-detail/migration-detail.component';
import { MigrationsListComponent } from './migrations-list/migrations-list.component';
import { MigrationsComponent } from './migrations/migrations.component';
import { MigrationOperationDetailComponent } from './migration-operation-detail/migration-operation-detail.component';

import { CsvImportService } from './csv-import.service';
import { CsvImportFormComponent } from './csv-import-form/csv-import-form.component';

import { DatasetExportService } from './dataset-export.service';

import { SerializationService } from './serialization.service';

import { ClientErrorComponent } from './client-error/client-error.component';
import { ValidationErrorComponent } from './validation-error/validation-error.component';

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
    ComparatorEditComponent,
    JobsListComponent,
    DatasetsListComponent,
    JobDetailComponent,
    LinkageResultDetailComponent,
    LinkageMatchDetailComponent,
    ClientErrorComponent,
    ValidationErrorComponent,
    CsvImportFormComponent,
    DatasetDetailComponent,
    DataTableComponent,
    DatasetBrowserComponent,
    ComparatorFormComponent,
    ComparatorDetailComponent,
    MigrationFormComponent,
    MigrationDetailComponent,
    MigrationsListComponent,
    MigrationsComponent,
    MigrationOperationDetailComponent,
    LinkagesListComponent,
    LinkageResultsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    DatasetService,
    LinkageService,
    ComparatorService,
    JobService,
    LinkageResultService,
    LinkageMatchService,
    CsvImportService,
    DatasetExportService,
    SerializationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
