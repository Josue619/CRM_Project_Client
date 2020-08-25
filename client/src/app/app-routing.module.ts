import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {} from './components/auth/auth.module';
import {} from './components/files/file.module';
import {} from './components/report/report.module';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: './components/auth/auth.module#AuthModule'},
  { path: '', loadChildren: './components/files/file.module#FileModule'},
  { path: '', loadChildren: './components/report/report.module#ReportModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
