import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import { REGION_LIST } from './../../Services/enum-list';


@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent implements OnInit {

  selectedRegion = '';
  regionList = REGION_LIST;
  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

  getGridData() {
    this.commonService.changeDataSource.emit(this.selectedRegion);
  }

  restGridData() {
    this.selectedRegion = '';
    this.commonService.changeDataSource.emit(this.selectedRegion);
  }

}
