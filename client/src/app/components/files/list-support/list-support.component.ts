import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-support',
  templateUrl: './list-support.component.html',
  styleUrls: ['./list-support.component.css']
})
export class ListSupportComponent implements OnInit {

  public error = [];
  public form = {
    search: null,
    id: null,
  };

  constructor( public Service: FileService, private router: Router ) { }

  ngOnInit(): void {
    this.getSupports();
  }

  searchSupports() {
    this.form.id = this.Service.id;
    return this.Service.searchSupports(this.form).subscribe(
      result => this.loadSupports(result),
      error => this.handleError(error)
    );
  }

  getSupports() {
    return this.Service.getSupportsClient(this.Service.id).subscribe(
      result => { this.Service.supports = result },
      error => this.handleError(error)
    );
  }

  loadSupports(result) {
    result.length == 0 ? this.getSupports() : this.Service.supports = result;
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
