import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { MenuRoutingModule } from './menu-routing.module';

import { MenuComponent } from './menu.component';
import { CookieDoughComponent } from './cookie-dough/cookie-dough.component';
import { IceCreamComponent } from './ice-cream/ice-cream.component';
import { OtherProductsComponent } from './other-products/other-products.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    MenuComponent,
    CookieDoughComponent,
    IceCreamComponent,
    OtherProductsComponent,
    SubMenuComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ScrollingModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatListModule,
    MatTableModule,
    MatGridListModule
  ],
  entryComponents:[
    PopupComponent
  ]
})
export class MenuModule { }
