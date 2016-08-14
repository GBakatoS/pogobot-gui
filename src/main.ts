import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent, environment } from './app/';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
import {MdListModule} from '@angular2-material/list/list';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdCardModule} from '@angular2-material/card/card';
import {MdIconModule} from '@angular2-material/icon/icon';
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

@NgModule({
  imports: [
    BrowserModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule
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
