import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getCurrentCityName(): Observable<any> {
    return this.http.get('https://ipinfo.io/json')
      .map(res => {
        return res.json();
      });
  }

}
