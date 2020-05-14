import { Injectable } from '@angular/core';
import { HttpCommonService } from './http-common.service';
import { apiList } from './enum-list';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {


  constructor(public http: HttpCommonService) { }

  getCountry(): Observable<any> {
    return this.http.get(apiList.allcountry);
  }

  getCountryByCurrency(): Observable<any> {
    return this.http.get(apiList.currency);
  }

  getCountryByRegion(region: string): Observable<any> {
    return this.http.get(apiList.region + region);
  }

  getCountryBylanguage(): Observable<any> {
    return this.http.get(apiList.lang);
  }

  getCountryByCapital(): Observable<any> {
    return this.http.get(apiList.capital);
  }

  getCountryByCallingCode(): Observable<any> {
    return this.http.get(apiList.callingCode);
  }

  getCountryByCountryCode(): Observable<any> {
    return this.http.get(apiList.countryCode);
  }

  getCountryByCountryName(): Observable<any> {
    return this.http.get(apiList.countryName);
  }

  getCountryBySubRegion(): Observable<any> {
    return this.http.get(apiList.subRegion);
  }
}
