import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../modules/contact/contact.service';

@Component({
  selector: 'promo-row3',
  templateUrl: './row3.component.html',
  styleUrls: ['./row3.component.less']
})
export class Row3Component implements OnInit {
  phone: string;
  email: string;

  constructor(
    private contacts: ContactService
  ) { }

  ngOnInit() {
    this.phone = this.contacts.getPhone();
    this.email = this.contacts.getEmail();
  }

}
