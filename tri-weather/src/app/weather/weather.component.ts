import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from "rxjs";
import { DailyForecast } from "../models/daily-forecast";
import { concatAll, map } from "rxjs/operators";
import { WeatherService } from "../services/weather.service";
import { WeatherSettingsService } from "../services/weather-settings.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styles: [
  ]
})
export class WeatherComponent implements OnInit {

  public dailyForecasts$: Observable<Array<DailyForecast>> = EMPTY;

  constructor(private dataSvc:WeatherService, private settingsSvc: WeatherSettingsService) { }

  ngOnInit(): void {
    this.dailyForecasts$ = this.settingsSvc.settings$.pipe(map(
      settings => this.dataSvc.getDailyForecast(settings)
    ), concatAll())
  }

}
