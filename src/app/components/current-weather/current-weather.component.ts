import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit, OnChanges {
  @Input() currentWeather!: {
    temp: number;
    city: string;
    country: string;
    date: number;
    icon: string;
    description: string;
  };

  static dt: number;

  constructor() {}

  /**
   * Méthode permettant d'afficher la date en temps réel dans le DOM
   */
  liveDate(): void {
    document.getElementById('weather-date')!.innerHTML =
      WeatherService.getDateString(new Date(CurrentWeatherComponent.dt));
    CurrentWeatherComponent.dt += 60000;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.currentWeather = changes['currentWeather'].currentValue;
    CurrentWeatherComponent.dt = this.currentWeather.date;
    this.liveDate();
    setInterval(this.liveDate, 60000);
  }
}
