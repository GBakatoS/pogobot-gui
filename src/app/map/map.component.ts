import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES, MouseEvent } from 'angular2-google-maps/core';
import { BotService } from '../bot.service';
import { Pokemon } from '../pokemon';

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
  directives: [GOOGLE_MAPS_DIRECTIVES],
  providers: [BotService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  private lat: number = 0;
  private lng: number = 0;
  private path: GPSPoint[] = [];
  private goToPoints: GPSPoint[] = [];
  private playerIconURL: String = "data:image/png;base64,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";
  private pokeStopIconURL: String = "data:image/png;base64,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";
  private pokebank: Pokemon[] = [];
  private pokeStops: PokeStop[] = [];

  constructor(private botService: BotService, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.botService.getMessages('newLocation').subscribe(message => {
      this.lat = message['lat'];
      this.lng = message['lng'];
      this.path.push(new GPSPoint(message));
      this.ref.markForCheck();
    });
    this.botService.getMessages('pokestop').subscribe(message => {
      this.newPokeStop(message);
      this.ref.markForCheck();
    });
    this.botService.getMessages('newPokemon').subscribe(message => {
      this.newPokemon(message);
      this.ref.markForCheck();
    });
  }
  private newPokemon(message: any) {
    this.pokebank.push(new Pokemon(message));
  }
  private newPokeStop(message: any) {
    this.pokeStops.push(new PokeStop(message['id'], message['name'],
      message['lat'], message['lng']));
  }
  private walkTo($event: MouseEvent) {
    this.botService.goTo($event.coords.lat, $event.coords.lng);
    this.goToPoints.push(new GPSPoint($event.coords));
  }
}
class GPSPoint {
  lat: number;
  lng: number;
  constructor(coords: any) {
    this.lat = coords['lat'];
    this.lng = coords['lng'];
  }
}

export class PokeStop {
  id: String;
  name: String;
  lat: number;
  lng: number;

  constructor(id: String, name: String, lat: number, lng: number) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
  }
}
