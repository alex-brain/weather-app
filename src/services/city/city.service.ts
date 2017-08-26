import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CityService {

  private cities: Array<string> = [];

  constructor(private apiService: ApiService) {
  }

  addCity(city) {
    if (city) {
      this.cities.push(city);
    }
  }

  getCityList() {
    return this.cities;
  }

  getCurrentCityName(): Observable<any> {
    return this.apiService.getCurrentCityName();
  }
}
