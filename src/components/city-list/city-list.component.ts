import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city/city.service';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';

@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: Array<any> = [];
  userCity = '';
  constructor(private cityService: CityService, private ngSpinningPreloader: NgSpinningPreloader) { }

  deleteCity(cityId) {
    this.cityService.deleteCity(cityId);
  }

  getCityList() {
    this.cities = this.cityService.getCityList();
  }

  ngOnInit() {
    this.ngSpinningPreloader.start();
    this.cityService.getCurrentCityName().subscribe(city => {
      this.userCity = city;
      this.ngSpinningPreloader.stop();
    }, error => {
      this.userCity = 'error';
      this.ngSpinningPreloader.stop();
    });
    this.getCityList();
  }

}
