import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportRoutingModule } from './report-routing.module';
import { FileService } from '../../services/file.service';
import { AfterLoginService } from '../../services/after-login.service';
import { SendRequestComponent } from './send-request/send-request.component';


@NgModule({
  declarations: [ SendRequestComponent ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReportRoutingModule
  ],
  providers: [ FileService, AfterLoginService ]
})

export class ReportModule { }