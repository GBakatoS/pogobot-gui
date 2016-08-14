import { Component, OnInit } from '@angular/core';
import { BotService } from '../bot.service';

@Component({
  moduleId: module.id,
  selector: 'pokebank',
  templateUrl: 'pokebank.component.html',
  styleUrls: ['pokebank.component.css'],
  providers: [BotService]
})
export class PokebankComponent implements OnInit {

  pokebank: Pokemon[]= [];
  constructor(private botService:BotService) {
  }

  pokebankSorted(){
    return this.pokebank.sort(function(pokemon1, pokemon2) {
      let comparision :number = pokemon2.date.getTime()-pokemon1.date.getTime();
      if(comparision === 0) {
          comparision = pokemon2.iv-pokemon1.iv;
      }
      if(comparision === 0) {
        comparision = pokemon2.cp-pokemon1.cp;
      }
      if(comparision === 0) {
        comparision = pokemon2.id-pokemon1.id;
      }
      return comparision;
    })
  }


  ngOnInit() {
    this.botService.getMessages('pokebank').subscribe(message => {
      this.pokebank= [];
      for(let pokemon of message['pokemon']) {
        this.pokebank.push(new Pokemon(pokemon.id, pokemon.pokemonId, pokemon.name, pokemon.cp,
          pokemon.iv, pokemon.stats, PokemonStatus.Old, 0,0));
      }
    });
    this.botService.getMessages('newPokemon').subscribe(message => {
      console.log(message);
      this.pokebank.push(new Pokemon(message['id'], message['pokemonId'], message['name'], message['cp'],
        message['iv'], message['stats'], PokemonStatus.New, message['lat'], message['lng']));
    });
    this.botService.getMessages('releasePokemon').subscribe(message => {
      for(let pokemon of this.pokebank) {
        console.log(pokemon.id + " === "+ message['id']);
        if(pokemon.id === message['id']) {
          console.log(pokemon);
          pokemon.status=PokemonStatus.Released;
        }
      }
    });
    this.botService.init();
  }

}
enum PokemonStatus {Old, New, Released};
class Pokemon {

  id :number;
  pokemonId :number;
  name :String;
  cp :number;
  iv :number;
  stats :String;
  lat :number;
  lng :number;
  status:PokemonStatus;
  date: Date;

  constructor(id :number, pokemonId :number,  name :String,  cp :number,
    iv :number,  stats :String, status:PokemonStatus,  lat :number,  lng :number) {
    this.date = new Date();
    this.id = id;
    this.pokemonId = pokemonId;
    this.name =name;
    this.cp =cp;
    this.iv =iv;
    this.stats = stats;
    this.lat = lat;
    this.lng = lng;
    this.status = status;
  }
}
