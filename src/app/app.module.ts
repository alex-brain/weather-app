import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CitiesListComponent } from '../pages/cities-list/cities-list.component';
import { CityService } from '../services/city/city.service';
import { ApiService } from '../services/api/api.service';
import { WeatherComponent } from '../pages/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CityService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
