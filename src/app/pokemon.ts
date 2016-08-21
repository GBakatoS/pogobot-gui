export class Pokemon {

  id: number;
  pokemonId: number;
  name: String;
  nickname: String;
  pclass: String;
  type1: String;
  type2: String;
  cp: number;
  iv: number;
  stats: String;
  favorite: boolean;
  cpMultiplier: number;
  heightM: number;
  weightKg: number;

  individualStamina: number;
  individualAttack: number;
  individualDefense: number;
  candy: number;
  candiesToEvolve: number;
  level: number;

  move1: String;
  move1Type: String;
  move1Power: number;
  move1Accuracy: number;
  move1CritChance: number;
  move1Time: number;
  move1Energy: number;

  move2: String;
  move2Type: String;
  move2Power: number;
  move2Accuracy: number;
  move2CritChance: number;
  move2Time: number;
  move2Energy: number;

  deployedFortId: String;
  stamina: number;
  maxStamina: number;
  maxCp: number;
  absMaxCp: number;
  maxCpFullEvolveAndPowerup: number;

  candyCostsForPowerup: number;
  stardustCostsForPowerup: number;
  creationTime: String;
  creationTimeMs: number;
  creationLatDegrees: number;
  creationLngDegrees: number;
  baseCaptureRate: number;
  baseFleeRate: number;
  battlesAttacked: number;
  battlesDefended: number;
  isInjured: boolean;
  isFainted: boolean;
  cpAfterPowerup: number;

  lat: number;
  lng: number;
  iconURL: String;

  constructor(pokemonArray: any) {
    for (var propName in pokemonArray) {
      this[propName] = pokemonArray[propName]
    }
    this.iconURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.pokemonId + ".png";
  }
}
