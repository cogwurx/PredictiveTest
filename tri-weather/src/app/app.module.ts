import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherSettingsComponent } from './weather/weather-settings/weather-settings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { DailyForecastComponent } from './weather/daily-forecast/daily-forecast.component';
import { DailyForecastCardComponent } from './weather/daily-forecast/daily-forecast-card/daily-forecast-card.component';
import { DayNightDetailComponent } from './weather/daily-forecast/daily-forecast-card/day-night-detail/day-night-detail.component';
import { TemperatureDetailComponent } from './weather/daily-forecast/daily-forecast-card/temperature-detail/temperature-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherSettingsComponent,
    DailyForecastComponent,
    DailyForecastCardComponent,
    DayNightDetailComponent,
    TemperatureDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
