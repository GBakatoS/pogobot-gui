import { Component, OnInit } from '@angular/core';
import { BotService } from '../bot.service';

@Component({
  moduleId: module.id,
  selector: 'log',
  templateUrl: 'log.component.html',
  styleUrls: ['log.component.css'],
  providers: [BotService]
})
export class LogComponent implements OnInit {
  messages = [];
  connection;

  constructor(private botService:BotService) {
  }

  ngOnInit() {
    this.connection = this.botService.getMessages('log').subscribe(message => {
      this.messages.unshift(message);
    })
  }

}
