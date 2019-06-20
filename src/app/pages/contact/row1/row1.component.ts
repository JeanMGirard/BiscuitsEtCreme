import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ContactService } from '../../../modules/contact/contact.service';
import { MapService } from '../../../modules/map/map.service';


@Component({
  selector: 'contact-row1',
  templateUrl: './row1.component.html',
  styleUrls: ['./row1.component.less']
})
export class Row1Component implements OnInit {
  embedded: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;

  constructor(
    public sanitizer: DomSanitizer,
    private contacts: ContactService,
    private maps: MapService
    ) { }

  ngOnInit() {
    this.getContactInfos();
    this.getGoogleInfo();
  }

  private getContactInfos(){
    this.email = this.contacts.getEmail();
    this.phone = this.contacts.getPhone();
    this.address1 = this.contacts.getAddressLine1();
    this.address2 = this.contacts.getAddressLine2(); 
  }
  private getGoogleInfo(){
    this.embedded = this.maps.getUnsanitizedEmbedUrl();
  }

}
