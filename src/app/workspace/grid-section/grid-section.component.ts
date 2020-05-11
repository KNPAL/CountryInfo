import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpCommonService } from 'src/app/Services/http-common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid-section',
  templateUrl: './grid-section.component.html',
  styleUrls: ['./grid-section.component.css']
})
export class GridSectionComponent implements OnInit {

  displayedColumns: string[] = ['name', 'capital', 'callingCodes', 'region'];
  dataSource: any = [];
  constructor(public http: HttpCommonService, private httpc: HttpClient) { }

  ngOnInit() {
    this.httpc.get('https://restcountries-v1.p.rapidapi.com/all').subscribe((data) => {
      this.dataSource = data;
      // console.log(data);
    });
  }
}
