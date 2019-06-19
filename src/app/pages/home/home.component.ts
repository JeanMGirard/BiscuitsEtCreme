import { Component, OnInit } from '@angular/core';


import CircleType from 'circletype';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {



    $(document).ready(() => {
      (new CircleType(document.getElementById('row-1-intro'))).radius(1200);
      $('#row-1-intro').addClass('loaded');
      $('body').addClass('loaded');
    });
  }

} 