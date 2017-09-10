import { Component, Input, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather/weather.service';

@Component({
  selector: 'weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  @Input() cityName;
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
  lineChartLegend = true;
  lineChartType = 'line';

  constructor(private weatherService: WeatherService) { }

  getWeatherForecast(cityName) {
    this.weatherService.getWeatherForecastInfo(cityName).subscribe(weather => {
      this.weatherForecast = weather;
      this.lineChartLabels = this.weatherForecast.map(item => {
        return item.dt_txt.substr(0, item.dt_txt.indexOf(' '));
      });
      this.lineChartData[0].data = this.weatherForecast.map(item => {
        return Math.round(item.main.temp);
      });
    }, error => {
      this.weatherForecast = 'error';
    });
  }

  ngOnInit() {
    this.getWeatherForecast(this.cityName);
  }

}
