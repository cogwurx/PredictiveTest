import { TemperatureValue } from "./temperature-value";
import { Deserializable } from "../interfaces/deserializable";

export class Temperature implements Deserializable {
  minimum: TemperatureValue = new TemperatureValue();
  maximum: TemperatureValue = new TemperatureValue();

  deserialize(input: any): this {
    this.maximum = new TemperatureValue().deserialize(input['Maximum']);
    this.minimum = new TemperatureValue().deserialize(input['Minimum']);
    return this;
  }
}
