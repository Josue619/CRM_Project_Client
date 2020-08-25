import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private config: NgbCarouselConfig) {
    this.config.interval = 3000;  
    this.config.wrap = true;  
    this.config.keyboard = false;  
    this.config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
