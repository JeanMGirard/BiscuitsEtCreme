import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../modules/contact/contact.service';

declare var $: any;

@Component({
  selector: 'contact-row2',
  templateUrl: './row2.component.html',
  styleUrls: ['./row2.component.less']
})
export class Row2Component implements OnInit {
  formAction: string;

  constructor(
    private contacts: ContactService
  ) { }

  ngOnInit() {
    this.formAction = "https://formspree.io/" + this.contacts.getContactFormEmail();
  }
  onClickSubmit(data) {
    /*alert("\nname  : " + data.name +
          "\nemail : " + data.email +
          "\ndescription : " + data.description +
          "\nstars : " + data.star);
    */
   var hgt = $("#contact-row-2 form").height();
   $("#contact-row-2 form").css("height", hgt);
   $("#contact-row-2 form").html($("#contact-r2-thankyou").html());
  }
}
