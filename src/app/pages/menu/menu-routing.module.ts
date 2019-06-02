import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { CookieDoughComponent } from './cookie-dough/cookie-dough.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';
import { OtherProductsComponent } from './other-products/other-products.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: ':menu', component: MenuComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
