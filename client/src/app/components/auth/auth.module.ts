import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MainService } from '../../services/main.service';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { AfterLoginService } from '../../services/after-login.service';
import { BeforeLoginService } from '../../services/before-login.service';
import { ProfileComponent } from '../profile/profile.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ MainService, AuthService, TokenService, AfterLoginService, BeforeLoginService ]
})
export class AuthModule { }