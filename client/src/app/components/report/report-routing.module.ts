import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterLoginService } from '../../services/after-login.service';
import { SendRequestComponent } from './send-request/send-request.component';

const routes: Routes = [
  { path: 'send/request', component: SendRequestComponent, canActivate: [AfterLoginService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }