import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import {
  REGION_LIST, AFRICA_SUB_REGION_LIST, ASIA_SUB_REGION_LIST, OCEANIA_SUB_REGION_LIST, EUROPE_SUB_REGION_LIST, AMERICA_SUB_REGION_LIST
} from './../../Services/enum-list';


@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent implements OnInit,DoCheck {

  selectedRegion = '';
  selectedsubRegion = '';
  count;
  regionList;
  subregionlist = [];
  content = 'Angular highlight text';
  query_conversation='t';
  constructor(public commonService: CommonService) {
    this.regionList = REGION_LIST;
  }

  ngOnInit() {
    this.commonService.recordCountEmitter.subscribe((data) => {
      this.count = data;
    });
  }

  ngDoCheck(){
    this.query_conversation = 'te';
  }

  getGridData() {
    if (!!this.selectedRegion === true && !!this.selectedsubRegion === false) {
      this.commonService.changeDataSource.emit({ Region: this.selectedRegion });
    } else if (!!this.selectedsubRegion === true && !!this.selectedRegion === true) {
      this.commonService.changeDataSource.emit({ subRegion: this.selectedsubRegion });
    } else {
      this.commonService.changeDataSource.emit('');
    }
  }

  restGridData() {
    this.selectedRegion = '';
    this.selectedsubRegion = '';
    this.commonService.changeDataSource.emit('');
    this.subregionlist = [];
  }

  onRegionChange(e) {
    this.selectedsubRegion = '';
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
