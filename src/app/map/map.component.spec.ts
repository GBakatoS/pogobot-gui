/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { MapComponent } from './map.component';
import { BotService } from '../bot.service';

describe('Component: Map', () => {
  it('should create an instance', () => {
    let component = new MapComponent(new BotService(), null);
    expect(component).toBeTruthy();
  });
});
