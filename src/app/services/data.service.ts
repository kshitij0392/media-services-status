import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, of as observableOf } from 'rxjs';
import { map, catchError,  filter } from "rxjs/operators";
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/filter';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
      token : any;
      saturnURL : string = "http://als-stg-1.mtvn.ad.viacom.com/alias/saturn/";
      constructor (public http: Http){
          this.http = http;
      }

      jwt () : any {
                  /** Auth settings **/
        let apiKey = 'F3A4F748-604A-4CDB-83AF-58B20FAC327B';
        let headers = new Headers();
        this.token = localStorage.getItem('id_token');
        headers.append('ApiKey', apiKey);
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        let options = new RequestOptions({headers: headers});
        return options;
      }

      getCurrentUser() : any {
        return this.http.get(this.saturnURL+"api/user", this.jwt())
        .pipe(map(response => response.json()))
        .toPromise()
        .catch(this.handleError)
    
      }

      getSecurityGroups(): any {
        return this.http.get(this.saturnURL+ "api/usergroups", this.jwt())
        .pipe(map(response=> response.json()))
        .toPromise()
        .catch(this.handleError)
      }

      getServiceStatus () :any {
          return this.http.get(this.saturnURL+"api/gethealthcheckstatus/", this.jwt())
          .pipe(map(respone=> respone.json()))
          .toPromise()
          .catch(this.handleError)
      }
      private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
  }