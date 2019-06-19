import { Component, OnInit } from '@angular/core';

//import CircleType from 'circletype';

@Component({
  selector: 'app-row1',
  templateUrl: './row1.component.html',
  styleUrls: ['./row1.component.less']
})
export class Row1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      //(new CircleType(document.getElementById('row-1-intro'))).radius(1200);
      $('#row-1-intro').addClass('loaded');
    });
  }

}
