import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

import { NeedC } from '../models/need';
import { RequestC } from '../models/request';
import { ServiceC } from '../models/service';
import { SupportC } from '../models/support';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  public id: string;
  public needs: any = [];
  public notes: any = [];
  public service: any = [];
  public requests: any = [];
  public supports: any = [];

  private headers = new HttpHeaders();
  private baseFileUrl = 'http://localhost:3000/api/file';
  private baseProductUrl = 'http://localhost:3000/api/product';

  constructor( private http: HttpClient, private Token: TokenService ) { 
    this.id = this.Token.get() ? this.Token.payload(this.Token.get())._id : '0';
    this.headers = this.headers.append('auth_token', this.Token.get());
  }

  /** ------------------------------------------- Request Routs ---------------------------------- */

  searchRequest(data): Observable<RequestC> {
    return this.http.post(`${this.baseFileUrl}/serarch`, data, {headers: this.headers});
  }

  getRequests(id: string): Observable<RequestC> {
    return this.http.get(`${this.baseFileUrl}/requests/${id}`, {headers: this.headers});
  }

  /** ------------------------------------------- Services Routs ---------------------------------- */

  searchServices(data): Observable<ServiceC> {
    return this.http.post(`${this.baseProductUrl}/serarchS`, data, {headers: this.headers});
  }

  getClientServices(id: string): Observable<ServiceC> {
    return this.http.get(`${this.baseProductUrl}/services/${id}`, {headers: this.headers});
  }

  /** ------------------------------------------- Supports Routs ---------------------------------- */

  searchSupports(data): Observable<SupportC> {
    return this.http.post(`${this.baseFileUrl}/serarchS`, data, {headers: this.headers});
  }

  getSupportsClient(id: string): Observable<SupportC> {
    return this.http.get(`${this.baseFileUrl}/supports/${id}`, {headers: this.headers});
  }

  /** ------------------------------------------- Neeeds Routs ---------------------------------- */

  searchNeeds(data): Observable<NeedC> {
    return this.http.post(`${this.baseFileUrl}/serarchN`, data, {headers: this.headers});
  }

  getNeedsClient(id: string): Observable<NeedC> {
    return this.http.get(`${this.baseFileUrl}/needs/${id}`, {headers: this.headers});
  }

  /** ------------------------------------------- Notes Routs ---------------------------------- */

  searchNotes(data): Observable<NeedC> {
    return this.http.post(`${this.baseFileUrl}/serarchT`, data, {headers: this.headers});
  }

  getNotes(id: string): Observable<Todo> {
    return this.http.get(`${this.baseFileUrl}/notesC/${id}`, {headers: this.headers});
  }
  
}
