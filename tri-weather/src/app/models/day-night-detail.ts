import { Deserializable } from "../interfaces/deserializable";

export class DayNightDetail implements Deserializable {
  iconNumber: number = 0;
  iconPhrase: string ='';
  hasPrecipitation: boolean = false;

  deserialize(input: any): this {
    this.iconNumber = input['Icon'];
    this.iconPhrase = input['IconPhrase'];
    this.hasPrecipitation = input['HasPrecipitation'];
    return this;
  }

  get iconLink(): string {
    return `https://www.accuweather.com/images/weathericons/${this.iconNumber < 10 ? '0' : ''}${this.iconNumber}.svg`
  }
}
