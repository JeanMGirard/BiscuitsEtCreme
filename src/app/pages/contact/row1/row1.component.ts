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
  embedded: any;
  info: any;

  constructor(
    private sanitizer: DomSanitizer,
    private contacts: ContactService,
    private maps: MapService
    ) { }

  ngOnInit() {
    this.getContactInfos();
    this.getGoogleInfo();
    this.embedded = this.sanitizer.bypassSecurityTrustResourceUrl(this.maps.urlOfEmbeddedMap);
  }

  private getContactInfos(){
    if(!this.info){
      this.info = {
        email: this.contacts.email,
        phone: this.contacts.phone,
        address1: this.contacts.addressLine1,
        address2: this.contacts.addressLine2
      };
    }
  }
  private getGoogleInfo(){
    if(!this.embedded){
      this.embedded = this.maps.urlOfEmbeddedMap;
    }
  }

}
