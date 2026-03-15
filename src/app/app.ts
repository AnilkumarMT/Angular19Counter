import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Getsetvalue } from './getsetvalue/getsetvalue';

@Component({
  selector: 'app-root',
  imports: [Counter,Getsetvalue],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my_angular');


}
