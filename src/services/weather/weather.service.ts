import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  weatherInfo = null;

  constructor(private apiService: ApiService) { }

  getWeatherInfo(): Observable<any> {
    return this.apiService.getWeatherInfo().map(res => {
      this.weatherInfo = res.city;
      return this.weatherInfo;
    });
  }

}
