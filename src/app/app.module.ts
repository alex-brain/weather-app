import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { CitiesComponent } from '../pages/cities/cities.component';
import { WeatherComponent } from '../pages/weather/weather.component';
import { AddCityFormComponent } from '../components/add-city-form/add-city-form.component';
import { CityListComponent } from '../components/city-list/city-list.component';
import { CurrentWeatherComponent } from '../components/current-weather/current-weather.component';
import { CityService } from '../services/city/city.service';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { WeatherService } from '../services/weather/weather.service';
import { ApiService } from '../services/api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    WeatherComponent,
    AddCityFormComponent,
    CityListComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    CityService,
    WeatherService,
    LocalStorageService,
    ApiService,
    NgSpinningPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
