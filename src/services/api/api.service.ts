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

  getWeatherInfo() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?units=metric&q=London&APPID=d1148e4efc9bfbde0e2aa799e83a26ba')
      .map(res => {
        console.log('weather info', res.json());
        return res.json();
      });
  }

}
