import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { RecentSearchComponent } from './components/recent-search/recent-search.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { DetailsWeatherComponent } from './components/details-weather/details-weather.component';
import { NextDaysWeatherComponent } from './components/next-days-weather/next-days-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    RecentSearchComponent,
    CurrentWeatherComponent,
    NextDaysWeatherComponent,
    DetailsWeatherComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
