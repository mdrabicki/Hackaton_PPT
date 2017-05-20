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

  private iconUnvisited = './assets/unvisited.png';
  private iconVisited = './assets/visited.png';

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
      this.mark(this.places[i]);
    }
  }

  private mark(placeParam: Place) {
    let lat: number = placeParam.latitude,
      longit: number = placeParam.longitude,
      title: string = placeParam.description;
    let place = new google.maps.LatLng(lat, longit);
    console.log("visited: " + placeParam.visited);
    let icon = placeParam.visited ? this.iconVisited:this.iconUnvisited;
    let marker = new google.maps.Marker({
      position: place,
      map: this.map,
      icon: icon,
      title: title
    });

    google.maps.event.addListener(marker, 'mouseover', this.showImage);
  }

  private showImage() {

    console.log("show image");
  }

  constructor(
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    initAll((map) => this.map = map);

    this.getPlaces();
    //this.mark(50.0411, 21.999120, "test");

    console.log(this.map);
  }

}
