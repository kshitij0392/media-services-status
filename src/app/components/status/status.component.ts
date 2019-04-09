import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface StatusTable {
  productsAndServices : String;
  eastCoast : Boolean;
  westCoast : Boolean;
  central : Boolean;
}

export interface EuropeStatusTable {
  productsAndServices : String;
  london : Boolean;
  amsterdam : Boolean;
  warsaw : Boolean;
}

const STATUS_DATA_AMERICAS : StatusTable [] = [
  {productsAndServices:'Catapult', eastCoast: true, westCoast: false, central: false},
  {productsAndServices:'Alias Process Manager', eastCoast: false, westCoast: true, central: true},
  {productsAndServices:'Alias Cloud Process Manager', eastCoast: true, westCoast: false, central: true},
  {productsAndServices:'WON', eastCoast: true, westCoast: false, central: true},
  {productsAndServices:'RabitMQ', eastCoast: true, westCoast: false, central: true},
  {productsAndServices:'PPC', eastCoast: false, westCoast: false, central: true},
  {productsAndServices:'REACH Engine', eastCoast: true, westCoast: true, central: false},
  {productsAndServices:'Wildmoka Engine', eastCoast: true, westCoast: false, central: false}
]

const STATUS_DATA_EUROPE : EuropeStatusTable [] = [
  {productsAndServices:'Catapult', london: true, amsterdam: true, warsaw: false},
  {productsAndServices:'Process Manager', london: false, amsterdam: true, warsaw: false},
  {productsAndServices:'WON', london: true, amsterdam: false, warsaw: false},
  {productsAndServices:'RabitMQ', london: true, amsterdam: false, warsaw: true},
  {productsAndServices:'PPC', london: false, amsterdam: false, warsaw: true},
  {productsAndServices:'REACH Engine', london: true, amsterdam: true, warsaw: true},
  {productsAndServices:'Wildmoka Engine', london: false, amsterdam: false, warsaw: true}
]



@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatusComponent implements OnInit {

  constructor() { }
  americasColumns : String [] = ['productsAndServices', 'eastCoast', 'westCoast', 'central'];
  europeColumns : String [] = ['productsAndServices', 'london', 'amsterdam', 'warsaw']
  dataSourceAmericas = new MatTableDataSource(STATUS_DATA_AMERICAS);
  dataSourceEurope = new MatTableDataSource(STATUS_DATA_EUROPE);

  ngOnInit() {
  }

}
