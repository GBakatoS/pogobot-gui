/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PokebankComponent } from './pokebank.component';
import { BotService } from '../bot.service';

describe('Component: Pokebank', () => {
  it('should create an instance', () => {
    let component = new PokebankComponent(new BotService(), null);
    expect(component).toBeTruthy();
  });
});
