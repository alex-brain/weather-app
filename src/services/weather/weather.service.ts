import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  weatherInfo = null;
  weatherForecast = null;

  constructor(private apiService: ApiService) { }

  getCurrentWeatherInfo(cityName): Observable<any> {
    return this.apiService.getCurrentWeatherInfo(cityName).map(res => {
      this.weatherInfo = res;
      return this.weatherInfo;
    });
  }

  getWeatherForecastInfo(cityName): Observable<any> {
    return this.apiService.getWeatherForecastInfo(cityName).map(res => {
      this.weatherForecast = res.list.filter(item => {
        return item.dt_txt.indexOf('15:00:00') !== -1;
      });
      return this.weatherForecast;
    });
  }



}
