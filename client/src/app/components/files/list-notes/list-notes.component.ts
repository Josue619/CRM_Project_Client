import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  public pageActual: number = 1;
  public error = [];
  public form = {
    search: null,
    id: null,
  };

  constructor( public Service: FileService, private router: Router ) { }

  ngOnInit(): void {
    this.getNotes();
  }

  searchNotes() {
    this.form.id = this.Service.id;
    return this.Service.searchNotes(this.form).subscribe(
      result => this.loadNotes(result),
      error => this.handleError(error)
    );
  }

  loadNotes(result) {
    result.length == 0 ? this.getNotes() : this.Service.notes = result;
  }

  getNotes() {
    return this.Service.getNotes(this.Service.id).subscribe(
      result => { this.Service.notes = result },
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
