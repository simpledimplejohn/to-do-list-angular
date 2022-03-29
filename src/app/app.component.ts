import { Component } from '@angular/core';
import { GlobalConstants } from './components/global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  constructor() {
    console.log(GlobalConstants.apiUrl);
  }
}
