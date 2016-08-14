import { Component, OnInit } from '@angular/core';
import { BotService } from '../bot.service';
import { Pokemon, PokemonStatus } from '../pokemon';

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

  private sortedPokebank(){
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

  private updatePokebank(message: any) {
    this.pokebank= [];
    for(let pokemon of message['pokemon']) {
      this.pokebank.push(new Pokemon(pokemon.id, pokemon.pokemonId, pokemon.name, pokemon.cp,
        pokemon.iv, pokemon.stats, PokemonStatus.Old, 0,0));
    }
    this.pokebank=this.sortedPokebank();
  }
  private newPokemon(message: any){
    this.pokebank.push(new Pokemon(message['id'], message['pokemonId'], message['name'], message['cp'],
      message['iv'], message['stats'], PokemonStatus.New, message['lat'], message['lng']));
    this.pokebank=this.sortedPokebank();
  }
  private releasePokemon(message: any){
    /*console.log(message);
    for(let pokemon of this.pokebank) {

      if(pokemon.pokemonId === message['pokemonId'] && pokemon.cp === message['cp']
        && pokemon.iv === message['iv'] && pokemon.name === message['name']) {
        console.log(pokemon);
        pokemon.status=PokemonStatus.Released;
        return;
      }
    }*/
  }

  ngOnInit() {
    this.botService.getMessages('pokebank').subscribe(message => {
      this.updatePokebank(message);
    });
    this.botService.getMessages('newPokemon').subscribe(message => {
        this.newPokemon(message);
    });
    this.botService.getMessages('releasePokemon').subscribe(message => {
        this.releasePokemon(message);
    });
    this.botService.init();
  }

}
