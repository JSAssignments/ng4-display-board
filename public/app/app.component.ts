import { Component, OnInit } from '@angular/core';
import { Schedule }          from './app.schedule';
import { AppDataService }    from './app-data.service';
import { TranslateService }  from 'ng2-translate';
import * as moment           from 'moment';

@Component({
	selector: 'app',
    templateUrl: './app/app.component.html'
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

   ngOnInit(){
   	 this.appDataService.getSchedules.apply(this, [arguments]);
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