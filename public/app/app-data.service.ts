import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

let d3 = require('d3');

@Injectable()
export class AppDataService {
  private schedules:any;
  
  // CORS issue - this url cannot be used
  private url:string = 'http://developer.mbta.com/lib/gtrtfs/Departures.csv';
   
  constructor(private http:Http) {}

  getSchedules() {
  	let self = this;

    d3.csv("./assets/data/departures.csv", function(result) {
    	self.schedules = result;
    });
  }
}


