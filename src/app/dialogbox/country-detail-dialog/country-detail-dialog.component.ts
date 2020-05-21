import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/Services/enum-list';
import { CommonApiCallService } from 'src/app/Services/common-api-call.service';

@Component({
  selector: 'app-country-detail-dialog',
  templateUrl: './country-detail-dialog.component.html',
  styleUrls: ['./country-detail-dialog.component.css']
})
export class CountryDetailDialogComponent implements OnInit {

  countryData;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public commonApiCallService: CommonApiCallService) { }

  ngOnInit() {
    // this.commonApiCallService.getCountryByCountryName(this.data.country).subscribe((data) => {
    //  this.countryData = data[0];
    // });
    this.countryData = this.data.country;
  }

}
