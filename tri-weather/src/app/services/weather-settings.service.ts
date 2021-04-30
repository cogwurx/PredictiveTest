import { Injectable } from '@angular/core';
import {TemperatureUnit} from "../enums/temperature-unit.enum";
import {WeatherSettings} from "../models/weather-settings";
import {AvailableLocations} from "../constants/available-locations";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherSettingsService {
  private settingsSubject = new BehaviorSubject<WeatherSettings>({
    location: AvailableLocations[0],
    temperatureUnit: TemperatureUnit.Fahrenheit
  });
  public settings$ = this.settingsSubject.asObservable();

  constructor() { }

  public updateSettings(settings: WeatherSettings) {
    this.settingsSubject.next(settings);
  }
}
