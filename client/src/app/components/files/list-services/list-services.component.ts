import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  public pageActual: number = 1;
  public error = [];
  public form = {
    search: null,
    id: null,
  };

  constructor( public Service: FileService, private router: Router ) { }

  ngOnInit(): void {
    this.getServices();
  }

  searchServices() {
    this.form.id = this.Service.id;
    return this.Service.searchServices(this.form).subscribe(
      result => this.loadServices(result),
      error => this.handleError(error)
    );
  }

  loadServices(result) {
    result.length == 0 ? this.getServices() : this.Service.service = result;
  }

  getServices() {
    return this.Service.getClientServices(this.Service.id).subscribe(
      result => { this.Service.service = result },
      error => this.handleError(error)
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

  clearError() {
    this.error = [];
    this.form.search = '';
  }

  handleResponse() {
    this.router.navigateByUrl('/file');
  }

  handleError(error) {
    this.error = error.error.errors;
    this.showModalError(this.error[0].msg);
  }

}
