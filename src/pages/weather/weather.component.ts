import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import { WeatherService } from '../../services/weather/weather.service';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'weather-info',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherInfo = null;
  weatherForecast = null;
  cityName = '';

  constructor(private weatherService: WeatherService,
              private route: ActivatedRoute,
              private ngSpinningPreloader: NgSpinningPreloader) {
  }

  getCurrentWeatherInfo(cityName) {
    this.weatherService.getCurrentWeatherInfo(cityName).subscribe(weather => {
      this.weatherInfo = weather;
      if (this.weatherForecast) {
        this.ngSpinningPreloader.stop();
      }
    });
  }

  getWeatherForecast(cityName) {
    this.weatherService.getWeatherForecastInfo(cityName).subscribe(weather => {
      this.weatherForecast = weather;
      console.log('this.weatherForecast', this.weatherForecast);
      if (this.weatherInfo) {
        this.ngSpinningPreloader.stop();
      }
    });
  }

  ngOnInit() {
    this.ngSpinningPreloader.start();
    this.route.params.subscribe(params => {
      if (params['city-name']) {
        this.cityName = params['city-name'];
      }
    });
    this.getCurrentWeatherInfo(this.cityName);
    this.getWeatherForecast(this.cityName);
  }

}
