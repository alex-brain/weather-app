import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CityService {

  private cities: Array<{ id: string, title: string }> = [];
  private userCity = '';

  constructor(private apiService: ApiService, private localStorageService: LocalStorageService) {
  }

  addCity(city) {
    if (city) {
      this.cities.push(city);
      this.localStorageService.cacheData('cities', this.cities);
    }
  }

  deleteCity(cityId) {
    this.cities.forEach((city, index) => {
      if (cityId === city.id) {
        this.cities.splice(index, 1);
      }
    });
    this.localStorageService.cacheData('cities', this.cities);
  }

  getCityList() {
    if (this.localStorageService.getCache('cities')) {
      this.cities = this.localStorageService.getCache('cities');
    }
    return this.cities;
  }

  getCurrentCityName(): Observable<any> {
    return this.apiService.getCurrentCityName().map(res => {
      this.userCity = res.city;
      return this.userCity;
    });
  }
}
