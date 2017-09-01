import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';


@Component({
  selector: 'weather-info',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherInfo = null;

  constructor(private weatherService: WeatherService) { }

  getWeatherInfo() {
    this.weatherService.getWeatherInfo().subscribe(weather => {
      this.weatherInfo = weather;
    });
  }

  ngOnInit() {
    this.getWeatherInfo();
  }

}
