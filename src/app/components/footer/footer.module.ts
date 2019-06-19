import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SocialService } from '../../modules/social/social.service';
import { ContactService } from 'src/app/modules/contact/contact.service';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent
  ],
  providers: [
    SocialService,
    ContactService
  ]
})
export class FooterModule { }
