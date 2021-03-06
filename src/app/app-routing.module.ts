import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { DatasetDetailComponent } from './dataset-detail/dataset-detail.component';
import { DatasetFormComponent } from './dataset-form/dataset-form.component';
import { DatasetBrowserComponent } from './dataset-browser/dataset-browser.component';
import { LinkagesComponent } from './linkages/linkages.component';
import { LinkageDetailComponent } from './linkage-detail/linkage-detail.component';
import { LinkageFormComponent } from './linkage-form/linkage-form.component';
import { LinkageResultDetailComponent } from './linkage-result-detail/linkage-result-detail.component';
import { ComparatorsComponent } from './comparators/comparators.component';
import { ComparatorEditComponent } from './comparator-edit/comparator-edit.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { MigrationFormComponent } from './migration-form/migration-form.component';
import { MigrationDetailComponent } from './migration-detail/migration-detail.component';
import { MigrationsComponent } from './migrations/migrations.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'datasets', component: DatasetsComponent },
  { path: 'datasets/new', component: DatasetFormComponent },
  { path: 'datasets/:id', component: DatasetDetailComponent },
  { path: 'datasets/:id/edit', component: DatasetFormComponent },
  { path: 'datasets/:id/browse', component: DatasetBrowserComponent },
  { path: 'migrations', component: MigrationsComponent },
  { path: 'migrations/new', component: MigrationFormComponent },
  { path: 'migrations/:id', component: MigrationDetailComponent },
  { path: 'linkages', component: LinkagesComponent },
  { path: 'linkages/new', component: LinkageFormComponent },
  { path: 'linkages/:id', component: LinkageDetailComponent },
  { path: 'linkages/:id/edit', component: LinkageFormComponent },
  { path: 'linkages/:linkageId/comparators', component: ComparatorsComponent },
  { path: 'linkages/:linkageId/comparators/:id', component: ComparatorEditComponent },
  { path: 'linkages/:linkageId/results/:id', component: LinkageResultDetailComponent },
  { path: 'jobs/:id', component: JobDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
