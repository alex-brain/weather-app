import { Component, Input, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather/weather.service';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() cityName;
  weatherInfo = null;

  constructor(private weatherService: WeatherService) { }

  getCurrentWeatherInfo(cityName) {
    this.weatherService.getCurrentWeatherInfo(cityName).subscribe(weather => {
      this.weatherInfo = weather;
    }, error => {
      this.weatherInfo = 'error';
    });
  }

  ngOnInit() {
    this.getCurrentWeatherInfo(this.cityName);
  }

}
