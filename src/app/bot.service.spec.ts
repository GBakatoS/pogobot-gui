/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BotService } from './bot.service';

describe('Service: BotService', () => {
  beforeEach(() => {
    addProviders([BotService]);
  });

  it('should ...',
    inject([BotService],
      (service: BotService) => {
        expect(service).toBeTruthy();
      }));
});
