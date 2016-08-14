import { Component, OnInit } from '@angular/core';
import { BotService } from '../bot.service';
import {DateFormatPipe} from 'angular2-moment';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'log',
  pipes: [DateFormatPipe],
  templateUrl: 'log.component.html',
  styleUrls: ['log.component.css'],
  providers: [BotService]
})
export class LogComponent implements OnInit {
  messages = [];
  connection :Subscription;

  constructor(private botService:BotService) {
  }



  ngOnInit() {
    this.connection = this.botService.getMessages('log').subscribe(message => {
      let logEntry: LogEntry = new LogEntry(message.message, message.type);
      this.messages.unshift(logEntry);
    })
  }

}
private class LogEntry {
  type: String;
  message: String;
  date: Date;

  constructor(message:String, type:String) {
    this.type = type;
    this.message = message;
    this.date = new Date();
  }
}
