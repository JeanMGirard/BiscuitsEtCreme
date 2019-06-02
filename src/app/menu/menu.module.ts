import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { CookieDoughModule } from './cookie-dough/cookie-dough.module';
import { IceCreamModule } from './ice-cream/ice-cream.module';
import { OtherProductsModule } from './other-products/other-products.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    CookieDoughModule,
    IceCreamModule,
    OtherProductsModule
  ]
})
export class MenuModule { }
