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

  getCurrentWeatherInfo(cityName) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=d1148e4efc9bfbde0e2aa799e83a26ba&q=' + cityName)
      .map(res => {
        return res.json();
      });
  }

  getWeatherForecastInfo(cityName) {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=d1148e4efc9bfbde0e2aa799e83a26ba&q=' + cityName)
      .map(res => {
        return res.json();
      });
  }

}
