import { Component, OnInit } from '@angular/core';
import { WeatherSettings } from "../../models/weather-settings";
import { WeatherSettingsService } from "../../services/weather-settings.service";
import { AvailableLocations } from "../../constants/available-locations";
import { TemperatureUnit } from "../../enums/temperature-unit.enum";
import { LocationInfo } from "../../models/location-info";
import { Observable } from "rxjs";

@Component({
  selector: 'app-weather-settings',
  templateUrl: './weather-settings.component.html',
  styles: [
  ]
})
export class WeatherSettingsComponent implements OnInit {
  private settings: WeatherSettings = new WeatherSettings();

  constructor(private svc: WeatherSettingsService) { }

  ngOnInit(): void {
    this.svc.settings$
      .subscribe(settings => {
        this.settings = settings;
      });
  }

  public get locationValue() {
    return this.settings.location;
  }

  public get availableLocations() {
    return AvailableLocations;
  }

  public get temperatureUnitValue() {
    return this.settings.temperatureUnit === TemperatureUnit.Fahrenheit;
  }

  public onLocationChange(location: LocationInfo) {
    this.settings.location = location;
    this.updateSettings();
  }

  public onTemperatureUnitChange($event: Event)
  {
    if($event!=null)
    {
      this.settings.temperatureUnit = ($event.target as any)['checked'] ? TemperatureUnit.Fahrenheit : TemperatureUnit.Celsius;
      this.updateSettings();
    }
  }

  private updateSettings() {
    this.svc.updateSettings(this.settings);
  }
}
