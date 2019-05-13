import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AdalService } from 'adal-angular4';
import { DataService } from "../services/data.service";
import { Observable, of as observableOf } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private adal: AdalService, private router: Router, private dataService : DataService) { }
  canActivate() {
    if (this.adal.userInfo.authenticated) {
      const appIdURI = 'https://viacom.onmicrosoft.com/vmsapidev';
      let token;
      return this.adal.acquireToken(appIdURI)
      .toPromise()
      .then(p =>{
        token = p;
        localStorage.setItem('id_token', token);
        let currentUser; 
        return this.dataService.getCurrentUser()
        .then((data:any)=>{
          currentUser = JSON.stringify(data);
          sessionStorage.setItem('currentUser', currentUser);
          
          return this.dataService.getSecurityGroups()
          .then((data:any) =>{
            let isSearch =  false;
            for (var i=0; i< data.length; i++){
              if (data[i].match('Web Search content')){
                isSearch = true;
                return true;
              }
            }
            this.router.navigate(['/error']);
            return false;
          });
        });
      });
    }else{
    this.adal.login();
    return false;
    }
  }
}
