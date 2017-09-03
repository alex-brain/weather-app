import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CityListComponent} from '../pages/city-list/city-list.component';
import {WeatherComponent} from '../pages/weather/weather.component';

const routes: Routes = [
  {path: '', redirectTo: 'city-list', pathMatch: 'full'},
  {path: 'city-list', component: CityListComponent},
  {path: 'weather-info/:city-name', component: WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
