import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city/city.service';
import uuidv4 from 'uuid/v4';

@Component({
  selector: 'add-city-form',
  templateUrl: './add-city-form.component.html',
  styleUrls: ['./add-city-form.component.css']
})
export class AddCityFormComponent implements OnInit {
  selectedCity = '';

  constructor(private cityService: CityService) { }

  addCity() {
    if (this.selectedCity) {
      this.cityService.addCity({
        id: uuidv4(),
        name: this.selectedCity
      });
      this.selectedCity = '';
    } else {
      alert('You didn\'t enter the city');
    }
  }

  ngOnInit() {
  }

}
