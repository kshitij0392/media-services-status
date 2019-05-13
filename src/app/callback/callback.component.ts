import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private router: Router, private adal: AdalService, private _zone: NgZone) { }

  ngOnInit() {
    this.adal.handleWindowCallback();
    setTimeout(() => {
      this._zone.run(
        () => this.router.navigate(['/'])
      );
    }, 200);
  }

}