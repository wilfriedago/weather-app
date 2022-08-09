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

  rotate(deg: number) {
    return `rotate(${deg})`;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.detailsWeather = changes['detailsWeather'].currentValue;
  }
}
