import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonApiCallService } from 'src/app/Services/common-api-call.service';
import { CommonService } from 'src/app/Services/common.service';
import { MatTableDataSource } from '@angular/material/table';
import { DISPLAYED_COLUMNS } from './../../Services/enum-list';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CountryDetailDialogComponent } from 'src/app/dialogbox/country-detail-dialog/country-detail-dialog.component';

@Component({
  selector: 'app-grid-section',
  templateUrl: './grid-section.component.html',
  styleUrls: ['./grid-section.component.css']
})
export class GridSectionComponent implements OnInit {

  displayedColumns: string[] = DISPLAYED_COLUMNS;
  dataSource = new MatTableDataSource<any>([]);
  query_conversation = 'a';
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public commonApiCallService: CommonApiCallService, public commonService: CommonService, public dialog: MatDialog) { }

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
          this.setDataSource(data);
          this.setPaginator(data.length);
        });
        break;
      case 'subregiontrue':
        this.commonApiCallService.getCountryBySubRegion(inputParam).subscribe((data) => {
          this.setDataSource(data);
          this.setPaginator(data.length);
        });
        break;
      default:
        this.commonApiCallService.getCountry().subscribe((data) => {
          this.setDataSource(data);
          this.setPaginator(data.length);
        });
        break;
    }
  }

  setPaginator(gridLength: number) {
    this.dataSource.paginator = this.paginator;
    this.paginator.length = gridLength;
  }

  setDataSource(payload) {
    this.dataSource = new MatTableDataSource<any>(payload);
    this.commonService.recordCountEmitter.emit(payload.length);
  }

  openDialog(name) {
    this.dialog.open(CountryDetailDialogComponent, {
      data: {
        country: name
      },
      height: '530px',
      width: '850px',
      maxWidth: '1020px'
    });
  }

}
