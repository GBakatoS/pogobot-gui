import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class BotService {
  private url = 'http://localhost:8001';
  private socket;

  constructor(){
   this.socket = io(this.url);
  }

  getMessages(messageType:String) {
    let observable = new Observable(observer => {
      this.socket.on(messageType, (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

  init() {
    this.socket.emit('init');
  }

}
