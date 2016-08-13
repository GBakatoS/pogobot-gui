import { Component } from '@angular/core';
import { LogComponent } from './log/log.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [LogComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
