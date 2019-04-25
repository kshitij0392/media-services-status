import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface StatusTable {
  productsAndServices : String;
  eastCoast : String;
  westCoast : String;
  central : String;
  headerService : Boolean;
}

export interface EuropeStatusTable {
  productsAndServices : String;
  london : String;
  amsterdam : String;
  warsaw : String;
  headerService: Boolean;
}

const STATUS_DATA_USA : StatusTable [] = [
  {productsAndServices:'Transcoding & Deliver', eastCoast: null, westCoast: null, central: null, headerService: true},
  {productsAndServices:'Catapult', eastCoast: "Warning", westCoast: "Stopped", central: "Warning", headerService: false},
  {productsAndServices:'Search Services', eastCoast: null, westCoast: null, central: null , headerService: true},
  {productsAndServices:'SOLR Search', eastCoast: "Running", westCoast: "Stopped", central: "Warning" , headerService: false},
  {productsAndServices:'SQL Search', eastCoast: "Running", westCoast: "Running", central: "Warning", headerService: false},
  {productsAndServices:'Process Manager', eastCoast: null, westCoast: null, central:null, headerService: true},
  {productsAndServices:'Premise Process Manager', eastCoast: "Warning", westCoast: "Stopped", central: "Running", headerService: false},
  {productsAndServices:'Cloud Process Manager', eastCoast: "Warning", westCoast: "Stopped", central: "Running", headerService: false},
  {productsAndServices:'Miscellaneous', eastCoast: "Warning", westCoast: "Stopped", central: "Running", headerService: true},
  {productsAndServices:'WON', eastCoast: "Warning", westCoast: "Stopped", central: "Running", headerService: false},
  {productsAndServices:'PPC', eastCoast: "Stopped", westCoast: "Stopped", central: "Warning", headerService: false},
  {productsAndServices:'REACH Engine', eastCoast: "Running", westCoast: "Running", central: "Stopped", headerService: false},
  {productsAndServices:'Wildmoka Engine', eastCoast: "Running", westCoast: "Warning", central: "Stopped", headerService: false},
  {productsAndServices:'Storage', eastCoast: null, westCoast: null, central: null, headerService: true},
  {productsAndServices:'DIVA', eastCoast: "Warning", westCoast: "Stopped", central: "Warning", headerService: false},
  {productsAndServices:'Search Services', eastCoast: null, westCoast: null, central: null , headerService: true},
  {productsAndServices:'SOLR Search', eastCoast: "Running", westCoast: "Stopped", central: "Warning" , headerService: false},
  {productsAndServices:'SQL Search', eastCoast: "Running", westCoast: "Running", central: "Warning", headerService: false},
  {productsAndServices:'Process Manager', eastCoast: null, westCoast: null, central:null, headerService: true},
  {productsAndServices:'Premise Process Manager', eastCoast: "Warning", westCoast: "Stopped", central: "Running", headerService: false},
  {productsAndServices:'Cloud Process Manager', eastCoast: "Warning", westCoast: "Stopped", central: "Running", headerService: false},
  {productsAndServices:'Miscellaneous', eastCoast: "Warning", westCoast: "Stopped", central: "Running", headerService: true},
  {productsAndServices:'WON', eastCoast: "Warning", westCoast: "Stopped", central: "Running", headerService: false},
  {productsAndServices:'PPC', eastCoast: "Stopped", westCoast: "Stopped", central: "Warning", headerService: false},
  {productsAndServices:'REACH Engine', eastCoast: "Running", westCoast: "Running", central: "Stopped", headerService: false},
  {productsAndServices:'Wildmoka Engine', eastCoast: "Running", westCoast: "Warning", central: "Stopped", headerService: false}
]

const STATUS_DATA_EUROPE : EuropeStatusTable [] = [
  {productsAndServices:'Transcoding & Deliver', london: null, amsterdam: null, warsaw: null, headerService: true},
  {productsAndServices:'Catapult', london: "Warning", amsterdam: "Stopped", warsaw: "Warning", headerService: false},
  {productsAndServices:'Search Services', london: null, amsterdam: null, warsaw: null , headerService: true},
  {productsAndServices:'SOLR Search', london: "Running", amsterdam: "Stopped", warsaw: "Warning" , headerService: false},
  {productsAndServices:'SQL Search', london: "Running", amsterdam: "Running", warsaw: "Warning", headerService: false},
  {productsAndServices:'Process Manager', london: null, amsterdam: null, warsaw:null, headerService: true},
  {productsAndServices:'Premise Process Manager', london: "Warning", amsterdam: "Stopped", warsaw: "Running", headerService: false},
  {productsAndServices:'Cloud Process Manager', london: "Warning", amsterdam: "Stopped", warsaw: "Running", headerService: false},
  {productsAndServices:'Miscellaneous', london: "Warning", amsterdam: "Stopped", warsaw: "Running", headerService: true},
  {productsAndServices:'WON', london: "Warning", amsterdam: "Stopped", warsaw: "Running", headerService: false},
  {productsAndServices:'PPC', london: "Stopped", amsterdam: "Stopped", warsaw: "Warning", headerService: false},
  {productsAndServices:'REACH Engine', london: "Running", amsterdam: "Running", warsaw: "Stopped", headerService: false},
  {productsAndServices:'Wildmoka Engine', london: "Running", amsterdam: "Warning", warsaw: "Stopped", headerService: false}
]


export interface RefreshTime {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatusComponent implements OnInit {

  constructor() { }
  usaColumns : String [] = ['productsAndServices', 'eastCoast', 'westCoast', 'central'];
  europeColumns : String [] = ['productsAndServices', 'london', 'amsterdam', 'warsaw'];
  dataSourceUSA = new MatTableDataSource(STATUS_DATA_USA);
  dataSourceEurope = new MatTableDataSource(STATUS_DATA_EUROPE);
  minutes: RefreshTime[] = [
    {value: 2, viewValue: '2 Minutes'},
    {value: 4, viewValue: '4 Minutes'},
    {value: 6, viewValue: '6 Minutes'},
    {value: 8, viewValue: '8 Minutes'},
    {value: 10, viewValue:'10 Minutes'}
  ];
  ngOnInit() {
  }

}
