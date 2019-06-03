import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenuRoutingModule } from './menu-routing.module';

import { MenuComponent } from './menu.component';
import { CookieDoughComponent } from './cookie-dough/cookie-dough.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';
import { OtherProductsComponent } from './other-products/other-products.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';


@NgModule({
  declarations: [
    MenuComponent,
    CookieDoughComponent,
    IceCreamComponent,
    OtherProductsComponent,
    SubMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
