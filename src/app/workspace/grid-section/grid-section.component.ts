import { Component, OnInit } from '@angular/core';
import { CommonApiCallService } from 'src/app/Services/common-api-call.service';
import { CommonService } from 'src/app/Services/common.service';
import { MatTableDataSource } from '@angular/material/table';
import { DISPLAYED_COLUMNS } from './../../Services/enum-list';

@Component({
  selector: 'app-grid-section',
  templateUrl: './grid-section.component.html',
  styleUrls: ['./grid-section.component.css']
})
export class GridSectionComponent implements OnInit {

  displayedColumns: string[] = DISPLAYED_COLUMNS;
  dataSource: any = [];
  constructor(public commonApiCallService: CommonApiCallService, public commonService: CommonService) { }

  ngOnInit() {
    this.commonApiCallService.getCountry().subscribe((data) => {
      this.dataSource = data;
    });

    this.commonService.changeDataSource.subscribe((inputParam) => {
      if (!!inputParam === true) {
        this.commonApiCallService.getCountryByRegion(inputParam).subscribe((data) => {
          this.dataSource = [];
          this.dataSource = new MatTableDataSource<any>(data);
          this.dataSource = data;
        });
      } else {
        this.commonApiCallService.getCountry().subscribe((data) => {
          this.dataSource = [];
          this.dataSource = new MatTableDataSource<any>(data);
          this.dataSource = data;
        });
      }
    });
  }
}
