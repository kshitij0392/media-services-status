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
    document.getElementById('page-container').setAttribute("style","height:"+window.innerHeight+"px");

  }
  ngOnInit() {
    document.getElementById('page-container').setAttribute("style","height:"+window.innerHeight+"px");
  }

}
