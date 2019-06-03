import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';
import { OtherProductsComponent } from './other-products/other-products.component';

const routes: Routes = [
  { path: '', component: MenuComponent,
    data: { animation: 'menu' }
  },
  { path: ':menu', component: SubMenuComponent,
    data: { animation: 'submenu' }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
