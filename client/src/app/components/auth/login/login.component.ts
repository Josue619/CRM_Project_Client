import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor( private Service: MainService, private Token: TokenService, private Auth: AuthService,) { }

  ngOnInit(): void {
  }

  onSubmit() {
    return this.Service.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }

  showModalError(msg: string) {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  handleResponse(data) {
    this.Token.handle(data.auth_token);
    this.Auth.changeAuthStatus(true);
  }

  handleError(error) {
    this.error = error.error;
    this.showModalError(this.error);
  }

}
