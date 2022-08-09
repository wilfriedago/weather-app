import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-details-weather',
  templateUrl: './details-weather.component.html',
  styleUrls: ['./details-weather.component.scss'],
})
export class DetailsWeatherComponent implements OnInit, OnChanges {
  @Input() detailsWeather!: {
    clouds: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    wind_deg: number;
  };

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.detailsWeather = changes['detailsWeather'].currentValue;
    document.getElementById(
      'wind-direction'
    )!.style.transform = `rotate(${this.detailsWeather.wind_deg})`;
  }
}
