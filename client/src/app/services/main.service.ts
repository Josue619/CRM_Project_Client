import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private headers = new HttpHeaders();
  private baseAuthUrl = 'http://localhost:3000/api/auth';

  constructor( private http: HttpClient, private Token: TokenService) {
    this.headers = this.headers.append('auth_token', this.Token.get());
  }

  login(data) {
    return this.http.post(`${this.baseAuthUrl}/login`, data);
  }

}
