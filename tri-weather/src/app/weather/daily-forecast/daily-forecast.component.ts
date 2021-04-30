import { Component, Input } from '@angular/core';
import { DailyForecast } from "../../models/daily-forecast";

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
})
export class DailyForecastComponent {
  @Input()
  dailyForecasts: Array<DailyForecast> | null = null;
}
