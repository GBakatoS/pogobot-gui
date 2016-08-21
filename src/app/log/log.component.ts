import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BotService } from '../bot.service';
import {DateFormatPipe} from 'angular2-moment';
import { Subscription } from 'rxjs/Subscription';
import * as moment from 'moment'

@Component({
  moduleId: module.id,
  selector: 'log',
  pipes: [DateFormatPipe],
  templateUrl: 'log.component.html',
  styleUrls: ['log.component.css'],
  providers: [BotService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogComponent implements OnInit {
  messages = [];
  connection :Subscription;

  constructor(private botService:BotService, private ref: ChangeDetectorRef) {
  }



  ngOnInit() {
    this.connection = this.botService.getMessages('log').subscribe(message => {
      let logEntry: LogEntry = new LogEntry(message['text'], message['type']);
      this.messages.unshift(logEntry);
      this.ref.markForCheck();
    })
  }

}
class LogEntry {
  type: String;
  text: String;
  dateString: String;

  constructor(text:String, type:String) {
    this.type = type;
    this.text = text;
    this.dateString = moment().format('LT');
  }
}
