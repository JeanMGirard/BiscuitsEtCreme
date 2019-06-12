import { Component, OnInit } from '@angular/core';
import { Schedule } from './schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less']
})
export class ScheduleComponent implements OnInit {
  schedule = Schedule;

  constructor() { }

  ngOnInit() {
  }

}
