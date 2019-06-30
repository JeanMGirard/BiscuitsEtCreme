import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SocialService } from '../../modules/social/social.service';

import { AboutComponent } from './about.component';
import { Parallax1Component } from './parallax1/parallax1.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { IntroComponent } from './intro/intro.component';
import { ArticlesComponent } from './articles/articles.component';


@NgModule({
  declarations: [
    AboutComponent, 
    Parallax1Component,
    SocialLinksComponent,
    IntroComponent,
    ArticlesComponent
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
