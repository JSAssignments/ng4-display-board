import { NgModule }              from '@angular/core';
import { FormsModule }           from '@angular/forms';
import { HttpModule }            from '@angular/http';
import { RouterModule }          from '@angular/router';
import { BrowserModule }         from '@angular/platform-browser';
import { TranslateCustomModule } from "./app.translate.module";

import { AppComponent }    from './app.component';
import { AppDataService }  from './app-data.service';


@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    TranslateCustomModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ AppDataService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
