import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city/city.service';

@Component({
  selector: 'cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {
  selectedCity = '';
  userCity = '';
  cities: Array<string> = [];


  constructor(private cityService: CityService) { }

  addCity() {
    this.cityService.addCity(this.selectedCity);
    this.selectedCity = '';
  }

  getCityList() {
    this.cities = this.cityService.getCityList();
  }

  ngOnInit() {
    this.cityService.getCurrentCityName().subscribe(weather => {
     this.userCity = weather.city;
    });
    this.getCityList();
  }

}
