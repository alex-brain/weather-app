import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city/city.service';

@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: Array<any> = [];
  userCity = '';
  constructor(private cityService: CityService) { }

  getCurrentUserCity() {
    this.userCity = '';
    this.cityService.getCurrentCityName().subscribe(city => {
      this.userCity = city;
    }, error => {
      this.userCity = 'error';
    });
  }

  deleteCity(cityId) {
    this.cityService.deleteCity(cityId);
  }

  getCityList() {
    this.cities = this.cityService.getCityList();
  }

  ngOnInit() {
    this.getCurrentUserCity();
    this.getCityList();
  }

}
