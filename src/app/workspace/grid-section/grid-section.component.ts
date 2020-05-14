import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpCommonService } from 'src/app/Services/http-common.service';
import { HttpClient } from '@angular/common/http';
import { CommonApiCallService } from 'src/app/Services/common-api-call.service';

@Component({
  selector: 'app-grid-section',
  templateUrl: './grid-section.component.html',
  styleUrls: ['./grid-section.component.css']
})
export class GridSectionComponent implements OnInit {

  displayedColumns: string[] = ['name', 'capital', 'callingCodes', 'region'];
  dataSource: any = [];
  constructor(public commonApiCallService: CommonApiCallService) { }

  ngOnInit() {
    this.commonApiCallService.getCountry().subscribe((data) => {
      this.dataSource = data;
    });
  }
}
