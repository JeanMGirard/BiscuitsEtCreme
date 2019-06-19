import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

import { ContactService } from 'src/app/modules/contact/contact.service';
import { Social } from '../../modules/social/social';
import { SocialService } from '../../modules/social/social.service';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  private hidden?: boolean = false;

  links: Social[];
  address1: string;
  address2: string;
  phone: string;
  email: string;

  constructor(
    private service: FooterService, 
    private contacts: ContactService, 
    private socials: SocialService
    ) { 
    this.service.hide.subscribe((value)=>{ 
      this.serviceHide(value); 
    });
  }


  ngOnInit(): void {
    this.getAddress( );
    this.getSocialLinks( );
  }
  serviceHide(value: boolean){
    this.hidden = value;
    if(value){  
      $('#footer').hide();
    } else {  
      $('#footer').show(); 
    }
  }
  getAddress(): void {
    this.address1 = this.contacts.getAddressLine1();
    this.address2 = this.contacts.getAddressLine2();
    this.phone = this.contacts.getPhone();
    this.email = this.contacts.getEmail();
  }
  getSocialLinks(): void{
    this.links = this.socials.getAll();
  }
}
