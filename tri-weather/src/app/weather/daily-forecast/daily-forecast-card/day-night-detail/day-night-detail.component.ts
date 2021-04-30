import { Component, Input } from '@angular/core';
import { DayNightDetail } from "../../../../models/day-night-detail";

@Component({
  selector: 'app-day-night-detail',
  templateUrl: './day-night-detail.component.html',
})
export class DayNightDetailComponent {
  @Input()
  public info: DayNightDetail = new DayNightDetail();

}
