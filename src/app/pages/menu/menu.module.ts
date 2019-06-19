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

import { PopupComponent } from './popup/popup.component';
import { MenuService } from './menu.service';

import { HeaderService } from '../../components/header/header.service';
import { FooterService } from '../../components/footer/footer.service';

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
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule
  ],
  entryComponents:[
    PopupComponent
  ]
})
export class MenuModule { }
