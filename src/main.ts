import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent, environment } from './app/';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdIconModule} from '@angular2-material/icon/icon';
import {MdTabsModule} from '@angular2-material/tabs/tabs'
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import { Angular2DataTableModule } from 'angular2-data-table';

@NgModule({
  imports: [
    BrowserModule,
    MdButtonModule,
    MdIconModule,
    MdTabsModule,
    Angular2DataTableModule
  ],
  providers: [GOOGLE_MAPS_PROVIDERS],
  declarations: [AppComponent],
  entryComponents: [AppComponent],
})

export class AppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
