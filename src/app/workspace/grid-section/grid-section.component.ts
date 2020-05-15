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
    this.getCountryByFilter();

    this.commonService.changeDataSource.subscribe((inputParam) => {
      this.getCountryByFilter(inputParam);
    });
  }

  getCountryByFilter(filterObject?: any) {
    let switchConst = '';
    let inputParam = '';
    if (!!filterObject === true) {
      Object.entries(filterObject).forEach(element => {
        switchConst += element[0].toLowerCase();
        inputParam = element[1].toString().toLowerCase();
      });
      switchConst += 'true';
    } else {
      switchConst = '';
    }
    console.log(switchConst);
    switch (switchConst) {
      case 'regiontrue':
        this.commonApiCallService.getCountryByRegion(inputParam).subscribe((data) => {
          this.dataSource = [];
          this.dataSource = new MatTableDataSource<any>(data);
          this.dataSource = data;
          this.commonService.recordCountEmitter.emit(this.dataSource.length);
        });
        break;
      case 'subregiontrue':
        this.commonApiCallService.getCountryBySubRegion(inputParam).subscribe((data) => {
          this.dataSource = [];
          this.dataSource = new MatTableDataSource<any>(data);
          this.dataSource = data;
          this.commonService.recordCountEmitter.emit(this.dataSource.length);
        });
        break;
      default:
        this.commonApiCallService.getCountry().subscribe((data) => {
          this.dataSource = data;
          this.commonService.recordCountEmitter.emit(this.dataSource.length);
        });
        break;
    }
  }

}
