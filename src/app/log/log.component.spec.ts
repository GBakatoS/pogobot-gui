/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { LogComponent } from './log.component';
import { BotService } from '../bot.service';

describe('Component: Log', () => {
  it('should create an instance', () => {
    let component = new LogComponent(new BotService(), null);
    expect(component).toBeTruthy();
  });
});
