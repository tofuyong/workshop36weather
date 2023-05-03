import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-listcities',
  templateUrl: './listcities.component.html',
  styleUrls: ['./listcities.component.css']
})
export class ListcitiesComponent implements OnInit {

  cities: any;
  
  constructor(private weatherSvc: WeatherService) { }

  ngOnInit(): void {
    this.weatherSvc.sortCities(); // to make sure countries are sorted right at the start
      this.cities = this.weatherSvc.countries;

  }


}
