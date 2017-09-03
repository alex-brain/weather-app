import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { CityListComponent } from '../pages/city-list/city-list.component';
import { WeatherComponent } from '../pages/weather/weather.component';
import { CityService } from '../services/city/city.service';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { WeatherService } from '../services/weather/weather.service';
import { ApiService } from '../services/api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    WeatherComponent
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
