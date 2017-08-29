import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CityService {

  private cities: Array<{ id: string, title: string }> = [];
  private userCity = '';

  constructor(private apiService: ApiService) {
  }

  addCity(city) {
    if (city) {
      this.cities.push(city);
    }
  }

  deleteCity(cityId) {
    this.cities.forEach((city, index) => {
      if (cityId === city.id) {
        this.cities.splice(index, 1);
      }
    });
  }

  getCityList() {
    return this.cities;
  }

  getCurrentCityName(): Observable<any> {
    return this.apiService.getCurrentCityName().map(res => {
      this.userCity = res.city;
      return this.userCity;
    });
  }
}
