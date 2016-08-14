import { Component } from '@angular/core';
import { LogComponent } from './log/log.component';
import { PokebankComponent } from './pokebank/pokebank.component';
import { MapComponent } from './map/map.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [
    LogComponent,
    PokebankComponent,
    MapComponent
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
