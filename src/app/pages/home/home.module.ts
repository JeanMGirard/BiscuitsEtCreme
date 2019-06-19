import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Row1Component } from './row1/row1.component';
import { Row2Component } from './row2/row2.component';
import { Row3Component } from './row3/row3.component';
import { GmapLinkComponent } from './gmap-link/gmap-link.component';



@NgModule({
  declarations: [
    HomeComponent, 
    Row1Component, 
    Row2Component, 
    Row3Component, GmapLinkComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
