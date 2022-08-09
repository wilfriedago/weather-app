import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from './services/weather.service';
import { UiService } from './services/ui.service';
import { WeatherData } from './interfaces/WeatherData';
import { Config } from './interfaces/Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  bgImageURL!: string;
  loading!: boolean;
  subscription!: Subscription;
  recentSearchList: string[];
  // Localisation par défaut de l'application
  _default: Config = {
    city: 'Cotonou',
    geolocation: {
      lon: 0,
      lat: 0,
    },
  };
  weatherData: WeatherData = {
    current: {
      city: '',
      country: '',
      date: 0,
      temp: 0,
      icon: '',
      description: '',
    },
    details: {
      clouds: 0,
      humidity: 0,
      pressure: 0,
      wind_speed: 0,
      wind_deg: 0,
    },
  };

  constructor(
    private weatherService: WeatherService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService
      .onLoading()
      .subscribe((value) => (this.loading = value));
    this.recentSearchList = this.uiService.loadStorage('recent-search') ?? [];
  }

  searchLocation(location: string) {
    this.uiService.startLoading();

    this.weatherService.getWeather(location).subscribe((data: any) => {
      this.weatherData = {
        current: {
          city: data.name as string,
          country: data.sys.country as string,
          date:
            (data.dt as number) * 1000 +
            (data.timezone as number) * 1000 -
            3600 * 1000,
          temp: data.main.temp as number,
          icon: data.weather[0].icon as string,
          description: data.weather[0].description as string,
        },
        details: {
          clouds: data.clouds.all as number,
          humidity: data.main.humidity as number,
          pressure: data.main.pressure as number,
          wind_speed: data.wind.speed as number,
          wind_deg: data.wind.deg as number,
        },
      };

      this.recentSearchList.unshift(this.weatherData.current.city);
      this.recentSearchList = this.uiService.cleanArray(this.recentSearchList);
      this.uiService.saveStorage(
        'recent-search',
        this.recentSearchList.toString()
      );

      this.uiService.stopLoading();
    });
  }

  ngOnInit(): void {
    this.searchLocation(this._default.city);
  }
}
