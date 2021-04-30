import { Component, Input } from '@angular/core';
import { Temperature } from "../../../../models/temperature";

@Component({
  selector: 'app-temperature-detail',
  templateUrl: './temperature-detail.component.html',
})
export class TemperatureDetailComponent  {
  @Input()
  temperature: Temperature = new Temperature();
}
