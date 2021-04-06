import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {ContactService, IContact} from '../../../modules/contact/contact.service';
import { MapService } from '../../../modules/map/map.service';
import {Observable, Subscription} from 'rxjs';


@Component({
  selector: 'contact-row1',
  templateUrl: './row1.component.html',
  styleUrls: ['./row1.component.less']
})
export class Row1Component implements OnInit {
  $info: Subscription
  embedded: any;
  info: IContact;

  constructor(
    private sanitizer: DomSanitizer,
    private contacts: ContactService,
    private maps: MapService
    ) {

  }

  ngOnInit() {
    this.getContactInfos();
    this.getGoogleInfo();
    this.embedded = this.sanitizer.bypassSecurityTrustResourceUrl(this.maps.urlOfEmbeddedMap);
  }

  private getContactInfos(){
    if(!this.info){
      const svc = this;
      this.$info = this.contacts.contacts
        .subscribe((contacts) => {
          if(contacts) {
            svc.info = contacts;
            svc.$info.unsubscribe()
          }
        })

      // this.info = {
      //   email: this.contacts.email,
      //   phone: this.contacts.phone,
      //   address1: this.contacts.addressLine1,
      //   address2: this.contacts.addressLine2
      // };
    }
  }
  private getGoogleInfo(){
    if(!this.embedded){
      this.embedded = this.maps.urlOfEmbeddedMap;
    }
  }

  get addressLine1(): string {
    return this.info?.address;
  }
  get addressLine2(): string {
    const ct = this.info?.city;
    const st = this.info?.state;
    const zp = this.info?.zipcode;
    const cn = this.info?.country;
    return ct+', '+st+', ' + zp;
  }
}
