import { Component, OnInit } from '@angular/core';
import { BotService } from '../bot.service';
import { Pokemon } from '../pokemon';
import {
  TableOptions,
  TableColumn,
  ColumnMode
} from 'angular2-data-table';

@Component({
  moduleId: module.id,
  selector: 'pokebank',
  templateUrl: 'pokebank.component.html',
  styleUrls: ['pokebank.component.css'],
  providers: [BotService]
})
export class PokebankComponent implements OnInit {

  pokebank: Pokemon[]= [];
  tableOptions = new TableOptions({
    columnMode: ColumnMode.force,
    headerHeight: 50,
    footerHeight: 50,
    rowHeight: 'auto',
    columns: [
      new TableColumn({ prop: 'name' }),
      new TableColumn({ name: 'cp' }),
      new TableColumn({ name: 'iv' }),
      new TableColumn({ name: 'maxCp' }),
    ]
  });

  constructor(private botService:BotService) {
  }

  private updatePokebank(message: any) {
    this.pokebank= [];
    for(let pokemon of message['pokemon']) {
      this.pokebank.push(pokemon);
    }
  }
  private newPokemon(message: any){
    this.pokebank.push(new Pokemon(message));
  }
  private releasePokemon(message: any){
    console.log(message);
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
