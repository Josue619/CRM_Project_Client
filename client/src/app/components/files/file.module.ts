import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileRoutingModule } from './file-routing.module';
import { MainService } from '../../services/main.service';
import { FileService } from '../../services/file.service';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { AfterLoginService } from '../../services/after-login.service';
import { RequestsComponent } from './requests/requests.component';
import { ListServicesComponent } from './list-services/list-services.component';
import { ListSupportComponent } from './list-support/list-support.component';
import { ListNeedsComponent } from './list-needs/list-needs.component';
import { ListNotesComponent } from './list-notes/list-notes.component';

import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [ RequestsComponent, ListServicesComponent, ListSupportComponent, ListNeedsComponent, ListNotesComponent ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FileRoutingModule,
    NgxPaginationModule
  ],
  providers: [ MainService, FileService, AuthService, TokenService, AfterLoginService ]
})
export class FileModule { }