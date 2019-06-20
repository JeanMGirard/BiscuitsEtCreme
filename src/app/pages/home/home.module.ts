import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Parallax1Component } from './parallax1/parallax1.component';
import { MenuLinksComponent } from './menu-links/menu-links.component';
import { GmapLinkComponent } from './gmap-link/gmap-link.component';
import { FloatingComponent } from './floating/floating.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { Parallax2Component } from './parallax2/parallax2.component';
import { Parallax3Component } from './parallax3/parallax3.component';



@NgModule({
  declarations: [
    HomeComponent, 
    Parallax1Component, 
    MenuLinksComponent,  
    GmapLinkComponent, 
    FloatingComponent, 
    SocialIconsComponent, 
    Parallax2Component, 
    Parallax3Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
