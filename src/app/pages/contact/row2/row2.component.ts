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
   // private afs: AngularFirestore
  ) { }

  ngOnInit() {
    //this.formAction = "https://formspree.io/" + this.contacts.getContactFormEmail();
  }
  onClickSubmit(data) {
    this.saveSubmission(data);
    this.showThankYouNote();
  }
  saveSubmission(data: any){
    /*const collection = this.afs.collection<any>('user-comments');
    collection.add({ 
      name:  data.name, 
      email: data.email,
      description: data.description,
      note: ((data.star/5)*100)
    });*/
  }
  showThankYouNote(){
    var hgt = $("#contact-row-2 form").height();
    $("#contact-row-2 form").css("height", hgt);
    $("#contact-row-2 form").html($("#contact-r2-thankyou").html());
  }
}
