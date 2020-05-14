import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  changeDataSource: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
}
