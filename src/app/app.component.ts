import {Component, OnInit} from '@angular/core';
import {CityService} from '../services/city/city.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cityService: CityService) {
  }

  getCurrentCityName() {
    this.cityService.getCurrentCityName();
  }

  ngOnInit() {
   // this.getCurrentCityName();
  }
}
