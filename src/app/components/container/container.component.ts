import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
@HostListener('window:resize', ['$event'])
export class ContainerComponent implements OnInit {

  constructor() { }
  public innerWidth: any;

  onResize(event) {
    console.log('Did it Hit ?');
   // event.target.innerWidth;
  //  this.innerWidth =  event.target.innerWidth;
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

}
