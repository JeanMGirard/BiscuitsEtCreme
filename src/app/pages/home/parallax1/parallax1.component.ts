import { Component, OnInit } from '@angular/core';

import CircleType from 'circletype';

@Component({
  selector: 'app-parallax1',
  templateUrl: './parallax1.component.html',
  styleUrls: [
    '../home.component.less',
    './parallax1.component.less'
  ]
})
export class Parallax1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      try{
        (new CircleType(document.getElementById('row-1-intro'))).radius(1200);
      } catch {
        console.log('CircleType not functionning properly');
      }
      
      $('#row-1-intro').addClass('loaded');
    });
  }

}
