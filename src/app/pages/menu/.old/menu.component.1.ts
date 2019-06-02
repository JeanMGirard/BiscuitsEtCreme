import { Component, OnInit } from '@angular/core';
import CircleType from 'circletype';

declare var $: any;

let  content_hide_delay = 0;
let  content_show_delay = 600;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  menu = 'app-ice-cream';

  hide(menu: string){
    $(menu).hide();
  }
  show(menu: string){
    $('#selected-content').show();

    this.hide(this.menu);
    $(menu).show();
    this.menu = menu;

    $('#selected-content').css('z-index', '1');
    $('#selected-content').css('opacity', '1');
  }
  close(){
    $('#selected-content').css('z-index', '-1');
    $('#selected-content').css('opacity', '0');
  }

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('body').addClass('loaded');
    });
  }
}
