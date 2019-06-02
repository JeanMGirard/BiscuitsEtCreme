import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {
      if($(window).scrollTop() > 30) {$('header, #content').addClass('scrolled');}
    });
    $(function() {
      $('header, #content').addClass('active');
      $(window).on('scroll', () => {
          // Header background effect
          if($(window).scrollTop() > 30){
            $('header, #content').addClass('scrolled');
          } else {
            $('header, #content').removeClass('scrolled');
          }
          // ----------------------------------------------------------------
      });
    });
  }
}