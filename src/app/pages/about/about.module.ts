import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SocialService } from '../../modules/social/social.service';

import { AboutComponent } from './about.component';
import { Row1Component } from './row1/row1.component';
import { Row2Component } from './row2/row2.component';
import { Row3Component } from './row3/row3.component';


@NgModule({
  declarations: [
    AboutComponent, 
    Row1Component,
    Row2Component,
    Row3Component
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  providers: [
    SocialService
  ]
})
export class AboutModule { }
