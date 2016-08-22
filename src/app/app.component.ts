import { Component } from '@angular/core';
import { LogComponent } from './log/log.component';
import { PokebankComponent } from './pokebank/pokebank.component';
import { MapComponent } from './map/map.component';
import { BotService } from './bot.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [
    LogComponent,
    PokebankComponent,
    MapComponent
  ],
  providers: [BotService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'PokemonGo Bot GUI';

  constructor(private botService: BotService) {
  }

  private refresh() {
    this.botService.init();
  }
}
