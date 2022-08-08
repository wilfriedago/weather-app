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
  @Input() currentWeather: {
    temp: number;
    city: string;
    date: number;
    icon: string;
    description: string;
  } = {
    temp: 0,
    city: '',
    date: 0,
    icon: '',
    description: '',
  };

  static dt: number;

  constructor() {
    if (!localStorage.getItem('dt')) {
      localStorage.setItem('dt', '0');
    } else {
      CurrentWeatherComponent.dt = parseInt(
        localStorage.getItem('dt') as string
      );
    }
  }

  updateDate(dt: number) {
    document.getElementById('weather-date')!.innerHTML =
      WeatherService.getDateString(new Date(dt));
  }

  /**
   * Méthode permettant d'afficher la date en temps réel dans le DOM
   */
  liveDate(): void {
    CurrentWeatherComponent.dt += 60000;
    document.getElementById('weather-date')!.innerHTML =
      WeatherService.getDateString(new Date(CurrentWeatherComponent.dt));
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.updateDate(this.currentWeather.date);
    setInterval(this.liveDate, 60000);
    localStorage.setItem('dt', this.currentWeather.date.toString());
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentWeather = changes['currentWeather'].currentValue;
  }
}
