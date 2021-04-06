import { Component, OnInit } from '@angular/core';
import {ContactService, ISchedule} from '../../modules/contact/contact.service';
import {Observable, Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less']
})
export class ScheduleComponent implements OnInit {
  schedule: ISchedule;
  $schedule: Subscription;

  constructor(private contacts: ContactService) {}

  ngOnInit() {
    const svc = this;

    this.$schedule = this.contacts.schedule
      .subscribe((schedule) => {
        if(schedule) {
          svc.schedule = schedule;
          svc.$schedule.unsubscribe()
        }
      })

  }

}
