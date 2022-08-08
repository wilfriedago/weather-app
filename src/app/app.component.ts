import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from './services/weather.service';
import { UiService } from './services/ui.service';
import { WeatherData } from './interfaces/WeatherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  bgImageURL!: string;
  loading!: boolean;
  subscription!: Subscription;
  weatherData: WeatherData = {
    current: {
      city: '',
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
  }

  searchLocation(location: string) {
    this.uiService.loadingActivity();
    this.weatherService.getWeather(location).subscribe(
      (data: any) =>
        (this.weatherData = {
          current: {
            city: data.name as string,
            date: (data.dt as number) * 1000,
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
        })
    );
    this.uiService.loadingActivity();
  }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(
      (data: any) =>
        (this.weatherData = {
          current: {
            city: data.name as string,
            date: (data.dt as number) * 1000,
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
        })
    );
  }
}
