import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public pageActual: number = 1;
  public error = [];
  public form = {
    search: null,
    id: null,
  };

  constructor( public Service: FileService, private router: Router ) { }

  ngOnInit(): void {
    this.getRequests();
  }

  searchRequest() {
    this.form.id = this.Service.id;
    return this.Service.searchRequest(this.form).subscribe(
      result => this.loadRequest(result),
      error => this.handleError(error)
    );
  }

  loadRequest(result) {
    result.length == 0 ? this.getRequests() : this.Service.requests = result;
  }

  getRequests() {
    return this.Service.getRequests(this.Service.id).subscribe(
      result => { this.Service.requests = result },
      error => this.handleError(error)
    );
  }

  priority(value: string) {
    if (value == '1') {
      return 'btn btn-danger';
    }else if (value == '2') {
      return 'btn btn-warning';
    }
    return 'btn btn-success';
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

  handleResponse() {
    this.router.navigateByUrl('/binnacle');
  }

  handleError(error) {
    this.error = error.error.errors;
    this.showModalError(this.error[0].msg);
  }

}
