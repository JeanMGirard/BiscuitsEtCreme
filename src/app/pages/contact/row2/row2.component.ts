import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../modules/contact/contact.service';
import { MessageService } from "../../../modules/contact/message.service";
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'contact-row2',
  templateUrl: './row2.component.html',
  styleUrls: ['./row2.component.less']
})
export class Row2Component implements OnInit {
  message: Observable<any>;
  formAction: string;

  constructor(
    private contacts: ContactService,
    private messages: MessageService
    ) { 
  }

  ngOnInit() {
    //this.formAction = "https://formspree.io/" + this.contacts.getContactFormEmail();
  }
  onClickSubmit(data) {
    this.saveMessage(data);
    this.showThankYouNote();
  }
  saveMessage(data: any){
    this.messages.createMessage(data);
  }
  showThankYouNote(){
    var hgt = $("#contact-row-2 form").height();
    $("#contact-row-2 form").css("height", hgt);
    $("#contact-row-2 form").html($("#contact-r2-thankyou").html());
  }
}
