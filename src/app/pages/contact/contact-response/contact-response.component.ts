import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-contact-response',
  templateUrl: './contact-response.component.html',
  styleUrls: ['./contact-response.component.less']
})
export class ContactResponseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(()=>{
      $('#contact-response').css('opacity', '1');
    });
  }

}
