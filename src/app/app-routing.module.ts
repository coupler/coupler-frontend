import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { DatasetFormComponent } from './dataset-form/dataset-form.component';
import { LinkagesComponent } from './linkages/linkages.component';
import { LinkageDetailComponent } from './linkage-detail/linkage-detail.component';
import { LinkageFormComponent } from './linkage-form/linkage-form.component';
import { ComparatorsComponent } from './comparators/comparators.component';
import { ComparatorFormComponent } from './comparator-form/comparator-form.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'datasets', component: DatasetsComponent },
  { path: 'datasets/:id', component: DatasetFormComponent },
  { path: 'linkages', component: LinkagesComponent },
  { path: 'linkages/new', component: LinkageFormComponent },
  { path: 'linkages/:id', component: LinkageDetailComponent },
  { path: 'linkages/:id/edit', component: LinkageFormComponent },
  { path: 'linkages/:linkageId/comparators', component: ComparatorsComponent },
  { path: 'linkages/:linkageId/comparators/:id', component: ComparatorFormComponent },
  { path: 'linkages/:linkageId/jobs/:id', component: JobDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
