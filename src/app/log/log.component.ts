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
      let logEntry: LogEntry = new LogEntry(message['text'], message['type']);
      this.messages.unshift(logEntry);
    })
  }

}
class LogEntry {
  type: String;
  text: String;
  date: Date;

  constructor(text:String, type:String) {
    this.type = type;
    this.text = text;
    this.date = new Date();
  }
}
