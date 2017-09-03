import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
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
  lineChartLabels: Array<string> = [];
  lineChartData = [
    {
      data: [],
      label: 'Temperature'
    }
  ];
  lineChartOptions: {
    responsive: true
  };
  lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
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
      this.lineChartLabels = this.weatherForecast.map(item => {
        return item.dt_txt.substr(0, item.dt_txt.indexOf(' '));
      });
      this.lineChartData[0].data = this.weatherForecast.map(item => {
        return Math.round(item.main.temp);
      });
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
