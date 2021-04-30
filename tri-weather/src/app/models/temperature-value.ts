import { TemperatureUnit } from "../enums/temperature-unit.enum";
import { CELSIUS_UNIT, FAHRENHEIT_UNIT } from "../constants/units";
import { Deserializable } from "../interfaces/deserializable";

export class TemperatureValue implements Deserializable {
  value: number = 0;
  unit: TemperatureUnit = TemperatureUnit.Fahrenheit;

  deserialize(input: any): this {
    this.value = input['Value'];

    if(input['Unit'] == CELSIUS_UNIT) {
      this.unit = TemperatureUnit.Celsius;
    }
    else {
      this.unit = TemperatureUnit.Fahrenheit;
    }

    return this;
  }

  get unitDisplay() {
    switch (this.unit) {
      case TemperatureUnit.Celsius:
        return '&#8451;';
      case TemperatureUnit.Fahrenheit:
        return '&#8457;';
      default:
        return '?';
    }
  }
}
