import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  changeDataSource: EventEmitter<any> = new EventEmitter<any>();
  recordCountEmitter: EventEmitter<number> = new EventEmitter <number> ();
  recordCount: number;
  constructor() { }
}
