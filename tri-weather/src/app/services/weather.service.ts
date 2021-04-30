import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {TemperatureUnit} from "../enums/temperature-unit.enum";
import {WeatherSettings} from "../models/weather-settings";
import {DailyForecast} from "../models/daily-forecast";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getDailyForecast(weatherSettings: WeatherSettings): Observable<Array<DailyForecast>> {
    const params = new HttpParams()
    .set('apikey', environment.weatherApiKey)
    .set('metric', weatherSettings.temperatureUnit == TemperatureUnit.Celsius ? 'true' : 'false');

    return this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${weatherSettings.location.key}`,
      {params})
      .pipe(map((rawRosponse: any) => {
        if(rawRosponse['DailyForecasts'] instanceof Array) {
          return rawRosponse['DailyForecasts']
            .map((rawDailyForecast: any) => new DailyForecast().deserialize(rawDailyForecast))
        }
        else {
          throw new TypeError("Invalid responce");

        }
      }));
  }
}
