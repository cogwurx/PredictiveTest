import { Temperature } from "./temperature";
import { DayNightDetail } from "./day-night-detail";
import { Deserializable } from "../interfaces/deserializable";

export class DailyForecast implements Deserializable {
  date: Date = new Date();
  temperature: Temperature = new Temperature();
  dayPart: DayNightDetail = new DayNightDetail();
  nightPart: DayNightDetail = new DayNightDetail();
  detailInfoLink: string = '';

  deserialize(input: any): this {
    this.temperature = new Temperature().deserialize(input['Temperature']);
    this.dayPart = new DayNightDetail().deserialize(input['Day']);
    this.nightPart = new DayNightDetail().deserialize(input['Night']);
    this.detailInfoLink = input['Link'];
    this.date = new Date(input['Date']);

    return this;
  }
}
