import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // host: {
  //   '(window:resize)': 'onResize($event)'
  // }
})
export class AppComponent {
  title = 'app';
  
  // onResize(event){
  //   event.target.innerHeight;
  //   event.target.innerWidth; // window width
  // }
}
