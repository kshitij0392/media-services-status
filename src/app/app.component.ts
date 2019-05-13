import { AdalService } from 'adal-angular4';
import { Component, HostListener } from '@angular/core';

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

  private adalConfig  = {
    tenant: 'viacom.onmicrosoft.com',
    clientId: '54b99e61-3cf5-4064-bf83-b82a5de9ad26',
    redirectUri: window.location.href.slice(0, window.location.href.lastIndexOf('/')),
    postLogoutRedirectUri: window.location.href.slice(0, window.location.href.lastIndexOf('/')),
  };




  ngOnInit(): void {
    //this.loading = true;
    this.adal.handleWindowCallback();
    this.adal.getUser();
    // this.loading = false;
 }

  constructor (private adal: AdalService) {
    this.adal.init(this.adalConfig);
  }

  signOut(): void {
    this.adal.logOut();
  }
}
