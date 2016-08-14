export enum PokemonStatus {Old, New, Released};
export class Pokemon {

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
  iconURL: String;

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
    this.iconURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.pokemonId+".png";
  }
}
