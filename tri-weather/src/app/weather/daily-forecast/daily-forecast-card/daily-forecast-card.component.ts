import { Component, Input } from '@angular/core';
import { DailyForecast } from "../../../models/daily-forecast";

@Component({
  selector: 'app-daily-forecast-card',
  templateUrl: './daily-forecast-card.component.html',
})
export class DailyForecastCardComponent  {
  @Input()
  dailyForecast: DailyForecast = new DailyForecast();

}
