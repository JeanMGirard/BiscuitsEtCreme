import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

import { ContactService } from '../../../modules/contact/contact.service';
import { MessageService } from '../../../modules/contact/message.service';
import { Observable } from 'rxjs';

import { ContactResponseComponent } from '../contact-response/contact-response.component';
import { environment } from '../../../../environments/environment';

declare var $: any;

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})
export class ContactFormComponent {
  sent: boolean;
  message: Observable<any>;
  formAction: string;

  constructor(
    private messages: MessageService,
    private ngZone: NgZone
    ) { 
  }

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  
  onClickSubmit(data) {
    this.saveMessage(data);
    this.showThankYouNote();
  }
  saveMessage(data: any){
    if(environment.production){
      this.messages.createMessage(data);
    }
  }
  showThankYouNote(){
    const hgt = $('#comment-form').height();
    $('#comment-form').css('height', hgt);
    this.sent = true;
  }
}
