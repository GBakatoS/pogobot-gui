import { Component, OnInit } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { BotService } from '../bot.service';
import { Pokemon, PokemonStatus } from '../pokemon';

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
  directives: [GOOGLE_MAPS_DIRECTIVES],
  providers: [BotService]
})
export class MapComponent implements OnInit {
  private lat: number = 0;
  private lng: number = 0;
  private pokebank: Pokemon[]= [];

  constructor(private botService:BotService) {
  }

  ngOnInit() {
    this.botService.getMessages('setLocation').subscribe(message => {
      this.lat = message['lat'];
      this.lng = message['lng'];
    });
    this.botService.getMessages('sendPokestop').subscribe(message => {
        console.log(message);
    });
    this.botService.getMessages('newPokemon').subscribe(message => {
        this.newPokemon(message);
    });
  }
  private newPokemon(message: any){
    this.pokebank.push(new Pokemon(message['id'], message['pokemonId'], message['name'], message['cp'],
      message['iv'], message['stats'], PokemonStatus.New, message['lat'], message['lng']));
  }
}
