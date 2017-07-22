import * as moment from 'moment';
import { Schedule } from './app.schedule';
import { Component, OnInit } from '@angular/core';
import { AppDataService } from './app-data.service';
import { TranslateService } from '@ngx-translate/core';


/**
 * @author: Shoukath Mohammed
 */
@Component({
	selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
   private schedules: Schedule[];
   private current:any = {};

   constructor(
   	private appDataService: AppDataService,
   	private translate: TranslateService
   ) {
   	    // this language will be used as a fallback 
        // when a translation isn't found in the current language
        translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, 
         // it will use the current loader to get them
        translate.use('en');
   }

   ngOnInit(): void {
   	 this.appDataService.getSchedules().subscribe(
        results => {
          this.schedules = results;
        },
        (err) => {
          console.log(err);
        }
      );
   	 this.getCurrentDateTime();
   }

   getCurrentDateTime():void {
   	 setInterval(() => {
	   	 this.current.time = moment().format('LT');
	   	 this.current.day  = moment().format('dddd');
	   	 this.current.date = moment().format('MM-DD-YYYY');
   	 }, 1000);
   }
}