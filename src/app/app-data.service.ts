import * as d3 from 'd3';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

/**
 * @author: Shoukath Mohammed
 */
@Injectable()
export class AppDataService {
  private debug: boolean = false;
  private schedules$: Subject<any> = new Subject();
  
  // CORS issue - this url cannot be used
  private url:string;
   
  constructor(private http:Http) {}

  initSchedules(): void {
      let self = this;

      this.url = (!this.debug) 
                 ? 'http://developer.mbta.com/lib/gtrtfs/Departures.csv'
                 : './assets/data/departures.csv';

      d3.csv(this.url, function(result) {
        self.schedules$.next(result);
      });
  }

  getSchedules(): Subject<any> {
    this.initSchedules();
    return this.schedules$;
  }
}


