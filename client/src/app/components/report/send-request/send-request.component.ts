import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RequestC } from 'src/app/models/request';
import { FileService } from 'src/app/services/file.service';
import { ServiceC } from 'src/app/models/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  public error = [];
  public request: RequestC = new RequestC();

  constructor( private Service: FileService, private router: Router ) { }

  ngOnInit(): void {
  }

  loadRequest() {
    delete this.request.id;
    delete this.request.created_at;

    this.request.id_Client = this.Service.id;
    this.request.solution = 'No definida';
    this.request.priority_color = '3';
    this.request.state = true;

    return this.request; 
  }

  addRequest() {
    this.loadRequest();
    return this.Service.addRequest(this.request).subscribe(
      result => this.handleResponse(result),
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

  cancelBtn() {
    this.error = [];
    this.router.navigateByUrl('/profile');
  }

  handleResponse(result) {
    this.showModalError(result);
    this.cancelBtn();
  }

  handleError(error) {
    this.error = error.error.errors;
    this.showModalError(this.error[0].msg);
  }

}
