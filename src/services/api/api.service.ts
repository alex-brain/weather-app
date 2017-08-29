import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
