import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestsComponent } from './requests/requests.component';
import { AfterLoginService } from '../../services/after-login.service';
import { ListServicesComponent } from './list-services/list-services.component';
import { ListSupportComponent } from './list-support/list-support.component';
import { ListNeedsComponent } from './list-needs/list-needs.component';
import { ListNotesComponent } from './list-notes/list-notes.component';


const routes: Routes = [
  { path: 'requests', component: RequestsComponent, canActivate: [AfterLoginService] },
  { path: 'services', component: ListServicesComponent, canActivate: [AfterLoginService] },
  { path: 'supports', component: ListSupportComponent, canActivate: [AfterLoginService] },
  { path: 'needs', component: ListNeedsComponent, canActivate: [AfterLoginService] },
  { path: 'notes', component: ListNotesComponent, canActivate: [AfterLoginService] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }