import { Component, OnInit } from '@angular/core';

import { initAll } from '../js/gmaps.js';
declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  map: any;

  constructor() { }

  ngOnInit() {
    initAll((map) => this.map = map);

    let rzeszow2 = new google.maps.LatLng(50.05, 21.8);
    let marker = new google.maps.Marker({
      position: rzeszow2,
      map: this.map,
      title: 'Restauracja'
    });

    console.log(this.map);
  }

}
