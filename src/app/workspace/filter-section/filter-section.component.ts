import { Component, OnInit, OnChanges } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import {
  REGION_LIST, AFRICA_SUB_REGION_LIST, ASIA_SUB_REGION_LIST, OCEANIA_SUB_REGION_LIST, EUROPE_SUB_REGION_LIST, AMERICA_SUB_REGION_LIST
} from './../../Services/enum-list';


@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent implements OnInit, OnChanges {

  selectedRegion = '';
  selectedsubRegion = '';
  count;
  regionList;
  subregionlist = [];
  constructor(public commonService: CommonService) {
    this.regionList = REGION_LIST;
  }

  ngOnInit() {
    this.commonService.recordCountEmitter.subscribe((data) => {
      this.count = data;
    });
  }

  ngOnChanges() {
    this.count = this.commonService.recordCount;
  }

  getGridData() {
    this.commonService.changeDataSource.emit(this.selectedRegion);
  }

  restGridData() {
    this.selectedRegion = '';
    this.commonService.changeDataSource.emit(this.selectedRegion);
    this.subregionlist = [];
  }

  onRegionChange(e) {
    switch (e) {
      case 'africa':
        this.subregionlist = AFRICA_SUB_REGION_LIST;
        break;
      case 'asia':
        this.subregionlist = ASIA_SUB_REGION_LIST;
        break;
      case 'oceania':
        this.subregionlist = OCEANIA_SUB_REGION_LIST;
        break;
      case 'europe':
        this.subregionlist = EUROPE_SUB_REGION_LIST;
        break;
      case 'americas':
        this.subregionlist = AMERICA_SUB_REGION_LIST;
        break;
    }
  }

}
