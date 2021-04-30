import { TemperatureUnit } from "../enums/temperature-unit.enum";
import { LocationInfo } from "./location-info";

export class WeatherSettings {
  temperatureUnit: TemperatureUnit = TemperatureUnit.Fahrenheit;
  location: LocationInfo = new LocationInfo();
}
