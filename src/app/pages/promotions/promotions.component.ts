import { Component, OnInit } from '@angular/core';
import { PromosService } from '../../modules/products/promos.service';

declare var $: any;


@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.less']
})
export class PromotionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('body').addClass('loaded');
    });
  }

}
