import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CitiesComponent} from '../pages/cities/cities.component';
import {WeatherComponent} from '../pages/weather/weather.component';

const routes: Routes = [
  {path: '', redirectTo: 'cities', pathMatch: 'full'},
  {path: 'cities', component: CitiesComponent},
  {path: 'weather-info/:city-name', component: WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
