import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { DatasetDetailComponent } from './dataset-detail/dataset-detail.component';
import { LinkagesComponent } from './linkages/linkages.component';
import { LinkageDetailComponent } from './linkage-detail/linkage-detail.component';
import { LinkageFormComponent } from './linkage-form/linkage-form.component';
import { ComparatorsComponent } from './comparators/comparators.component';
import { ComparatorDetailComponent } from './comparator-detail/comparator-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'datasets', component: DatasetsComponent },
  { path: 'datasets/:id', component: DatasetDetailComponent },
  { path: 'linkages', component: LinkagesComponent },
  { path: 'linkages/:id', component: LinkageDetailComponent },
  { path: 'linkages/:id/edit', component: LinkageFormComponent },
  { path: 'linkages/:linkageId/comparators', component: ComparatorsComponent },
  { path: 'linkages/:linkageId/comparators/:id', component: ComparatorDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
