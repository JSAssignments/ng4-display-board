import { NgModule } from '@angular/core';
import { Http }     from '@angular/http';
import { TranslateLoader, TranslateModule, TranslateStaticLoader, TranslateService } from 'ng2-translate';


@NgModule({
  imports: [ 
  TranslateModule.forRoot({
  	provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [Http]
  }) 
  ],
  providers: [TranslateService],
  exports: [TranslateModule]
})

export class TranslateCustomModule {}

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n/', '.json');
}