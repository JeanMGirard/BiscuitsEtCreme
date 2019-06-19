import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../modules/contact/contact.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less']
})
export class ScheduleComponent implements OnInit {
  schedule: any;

  constructor(private contacts: ContactService) {}

  ngOnInit() {
    this.schedule = this.contacts.getSchedule();
  }

}
