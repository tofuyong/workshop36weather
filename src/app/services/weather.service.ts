import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { City } from 'src/app/model/city';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // No DB so hardcode first
  countries = [
    // { country: 'Singapore', city: 'Singapore' },
    { country: 'United Kingdom', city: 'London' },
    { country: 'Malaysia', city: 'Kuala Lumpur' },
    { country: 'Indonesia', city: 'Jakarta' },
    { country: 'China', city: 'Beijing' },
    { country: 'India', city: 'New Delhi' },
    { country: 'Thailand', city: 'Bangkok' }
  ];

  imageUrlCities = [
    // { city: 'Singapore', imageUrl: '' },
    { city: 'London', imageUrl: 'https://shorturl.at/sxCHR' },
    { city: 'Kuala Lumpur', imageUrl: 'https://shorturl.at/coyC4' },
    { city: 'Jakarta', imageUrl: 'https://shorturl.at/mHLO9' },
    { city: 'Beijing', imageUrl: 'https://shorturl.at/dmosu' },
    { city: 'New Delhi', imageUrl: 'https://shorturl.at/dyEGI' },
    { city: 'Bangkok', imageUrl: 'https://shorturl.at/bluBW' },
  ];

  constructor(private httpClient: HttpClient) { }

  getWeather(city: string, apiKey: string): Promise<any> {
    const params = new HttpParams()
                  .set("q", city)
                  .set("units", "metric")
                  .set("appid", apiKey)
    return lastValueFrom(
      this.httpClient.get(environment.openWeatherApiUrl, {params: params})
    );
  }

  getCityUrl(city: string) {
    const w = this.imageUrlCities.find(v => v.city == city);
    console.log(w);
    return w;
  }

  addCity(city: City) {
    this.countries.push({city: city.city, country: city.country});
    this.sortCities();
    this.imageUrlCities.push({city: city.city, imageUrl: city.imageUrl});
  }

  sortCities() {
    this.countries.sort((a, b) => (b.city > a.city) ? 1: -1);
  }

}
