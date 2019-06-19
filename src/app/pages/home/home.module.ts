import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Parallax1Component } from './parallax1/parallax1.component';
import { MenuLinksComponent } from './menu-links/menu-links.component';
import { Row3Component } from './row3/row3.component';
import { GmapLinkComponent } from './gmap-link/gmap-link.component';
import { FloatingComponent } from './floating/floating.component';



@NgModule({
  declarations: [
    HomeComponent, 
    Parallax1Component, 
    MenuLinksComponent, 
    Row3Component, 
    GmapLinkComponent, 
    FloatingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
