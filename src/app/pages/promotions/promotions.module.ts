import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsComponent } from './promotions.component';

import { PromotionsRoutingModule } from './promotions-routing.module';
import { Row1Component } from './row1/row1.component';
import { PromosService } from '../../modules/products/promos.service';
import { Row2Component } from './row2/row2.component';
import { Row3Component } from './row3/row3.component';
//import { PromosService } from './promos.service';

@NgModule({
  declarations: [
    PromotionsComponent, 
    Row1Component, Row2Component, Row3Component
  ],
  imports: [
    CommonModule,
    PromotionsRoutingModule
  ],
  providers: [
    PromosService
  ]
})
export class PromotionsModule { }
