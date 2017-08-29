import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city/city.service';
import uuidv4 from 'uuid/v4';

@Component({
  selector: 'cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {
  selectedCity = '';
  userCity = '';
  cities: Array<any> = [];


  constructor(private cityService: CityService) { }

  addCity() {
    this.cityService.addCity({
      id: uuidv4(),
      title: this.selectedCity
    });
    this.selectedCity = '';
  }

  deleteCity(cityId) {
    this.cityService.deleteCity(cityId);
  }

  getCityList() {
    this.cities = this.cityService.getCityList();
  }

  ngOnInit() {
    this.cityService.getCurrentCityName().subscribe(city => {
      this.userCity = city;
    });
    this.getCityList();
  }

}
