import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-needs',
  templateUrl: './list-needs.component.html',
  styleUrls: ['./list-needs.component.css']
})
export class ListNeedsComponent implements OnInit {

  public error = [];
  public form = {
    search: null,
    id: null,
  };

  constructor( public Service: FileService, private router: Router ) { }

  ngOnInit(): void {
    this.getNeeds();
  }

  searchNeeds() {
    this.form.id = this.Service.id;
    return this.Service.searchNeeds(this.form).subscribe(
      result => this.loadNeeds(result),
      error => this.handleError(error)
    );
  }

  loadNeeds(result) {
    result.length == 0 ? this.getNeeds() : this.Service.needs = result;
  }

  getNeeds() {
    return this.Service.getNeedsClient(this.Service.id).subscribe(
      result => { this.Service.needs = result },
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
