import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CitiesListComponent} from '../pages/cities-list/cities-list.component';
import {WeatherComponent} from '../pages/weather/weather.component';

const routes: Routes = [
  {path: '', redirectTo: 'cities-list', pathMatch: 'full'},
  {path: 'cities-list', component: CitiesListComponent},
  {path: 'weather/:id', component: WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
