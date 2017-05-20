/**
 * Created by kamil on 20.05.17.
 */

import {Http, Headers} from "@angular/http";

export class ApiService {
  protected BASE_URL = "https://hakaton.fwd.wf";
  protected headers = new Headers({'Content-Type': 'application/json'});

  protected handleError(error: any): Promise<any> {
    console.log("Error occured: " + error);
    return Promise.reject(error.message || error);
  }
}
