import { Component, OnInit } from '@angular/core';

import { initAll } from '../js/gmaps.js';
import {Place} from "../model/place";
import {PlaceService} from "../services/place.service";
import {forEach} from "@angular/router/src/utils/collection";
declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  map: any;

  places: Place[];

  getPlaces() {
    this.placeService.getAll()
      .then(
        response => {
          this.places = response as Place[];
          this.markPlaces();
        });
  }

  private markPlaces() {
    for(let i = 0; i < this.places.length; i++) {
      console.log(this.places[i]);
      this.mark(this.places[i].latitude, this.places[i].longitude, this.places[i].name);
    }
  }

  private mark(lat: number, longit: number, title: string) {
    let place = new google.maps.LatLng(lat, longit);
    let marker = new google.maps.Marker({
      position: place,
      map: this.map,
      title: title
    });
  }

  constructor(
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    initAll((map) => this.map = map);

    this.getPlaces();

    console.log(this.map);
  }

}
