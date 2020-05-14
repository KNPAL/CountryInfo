import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  getGridData() {
    alert(this.selectedRegion);
  }

}
