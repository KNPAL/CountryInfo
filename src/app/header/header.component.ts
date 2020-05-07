import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  siteName = '';
  constructor() {
    this.siteName = 'Country Details';
   }

  ngOnInit() {
  }

}
