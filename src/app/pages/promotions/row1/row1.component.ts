import { Component, OnInit } from '@angular/core';
import { PromosService } from '../../../modules/products/promos.service';
import { Promo } from 'src/app/modules/products/promo';

@Component({
  selector: 'promo-row1',
  templateUrl: './row1.component.html',
  styleUrls: ['./row1.component.less']
})
export class Row1Component {
  constructor(public promos: PromosService){}
}
