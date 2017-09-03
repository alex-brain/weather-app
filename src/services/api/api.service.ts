import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { config } from '../../config';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getCurrentCityName(): Observable<any> {
    return this.http.get(config.IpInfo)
      .map(res => {
        return res.json();
      });
  }

  getCurrentWeatherInfo(cityName) {
    return this.http.get(config.currentWeather + '&APPID=' + config.appId + '&q=' + cityName)
      .map(res => {
        return res.json();
      });
  }

  getWeatherForecastInfo(cityName) {
    return this.http.get(config.weatherForecast + '&APPID=' + config.appId + '&q=' + cityName)
      .map(res => {
        return res.json();
      });
  }

}
