import { Component, OnInit } from '@angular/core';
import { PromosService } from '../../../modules/products/promos.service';
import { Promo } from '../../../modules/products/promo';

@Component({
  selector: 'promo-row1',
  templateUrl: './row1.component.html',
  styleUrls: ['./row1.component.less']
})
export class Row1Component implements OnInit {
  promo_today: Promo;
  weekdays: Promo[];

  constructor(
    private promotions: PromosService
  ) { }

  ngOnInit() {
    this.getWeekdays();
  }
  getWeekdays(){
    this.weekdays = this.promotions.getWeekdays();
    this.promo_today = this.weekdays[new Date().getDay()];
  }
}
