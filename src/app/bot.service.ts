import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class BotService {
  private url = 'http://localhost:8001';
  private socket;

  constructor(){
   this.socket = io(this.url);
  }
  getMessages(message:String) {
    let observable = new Observable(observer => {
      this.socket.on(message, (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

}
