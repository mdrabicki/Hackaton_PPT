import {Injectable} from '@angular/core';
import {Place} from "../model/place";
import {ApiService} from "./api.service";

import { Http, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class PlaceService extends ApiService{

  getAll(): Promise<Place[]> {
    return this.http.get(this.BASE_URL + '/api/place')
      .toPromise()
      .then(response => response.json() as Place[])
      .catch(this.handleError);

  }

  getPlace(id: number) {}

  addPlace(place: Place) {
  }

  deletePlace(id: number) {}

  constructor(private http: Http) {
    super();
  }

}
