import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { ContactService } from 'src/app/modules/contact/contact.service';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  private hidden?: boolean = false;

  address1: string;
  address2: string;
  phone: string;

  constructor(
      private service: FooterService,
      private contacts: ContactService,
    ) { 
    this.service.hide.subscribe((value)=>{ this.serviceHide(value); });
  }

  ngOnInit() {
    this.getAddress();
  }

  serviceHide(value: boolean){
    this.hidden = value;
    if(value){  $('#footer').hide();
    } else {  $('#footer').show(); }
  }
  getAddress(){
    this.address1 = this.contacts.getAddressLine1();
    this.address2 = this.contacts.getAddressLine2();
    this.phone = this.contacts.getPhone();
  }
}
