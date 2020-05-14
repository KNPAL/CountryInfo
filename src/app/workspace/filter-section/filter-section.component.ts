import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent implements OnInit {

  selectedRegion = '';
  regionList = [
    { value: 'africa', viewValue: 'Africa' },
    { value: 'asia', viewValue: 'Asia' },
    { value: 'oceania', viewValue: 'Oceania' },
    { value: 'europe', viewValue: 'Europe' },
    { value: 'americas', viewValue: 'Americas' }
  ];
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
