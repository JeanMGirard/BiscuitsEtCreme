import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  private hidden?: boolean = false;
  

  constructor(
    private service: FooterService
  ) { 
    this.service.hide.subscribe((value)=>{ this.serviceHide(value); });
  }

  ngOnInit() {
  }

  serviceHide(value: boolean){
    this.hidden = value;
    if(value){  $('#footer').hide();
    } else {  $('#footer').show(); }
  }
  
}
