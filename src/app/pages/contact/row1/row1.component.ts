import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../modules/contact/contact.service';

@Component({
  selector: 'contact-row1',
  templateUrl: './row1.component.html',
  styleUrls: ['./row1.component.less']
})
export class Row1Component implements OnInit {
  email: string;
  phone: string;
  address1: string;
  address2: string;

  constructor(private contacts: ContactService) { }

  ngOnInit() {
    this.getContactInfos();
  }

  private getContactInfos(){
    this.email = this.contacts.getEmail();
    this.phone = this.contacts.getPhone();
    this.address1 = this.contacts.getAddressLine1();
    this.address2 = this.contacts.getAddressLine2(); 
  }

}
