import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ContactRoutingModule } from './contact-routing.module';
import { ScheduleModule } from '../../components/schedule/schedule.module';

import { ContactService } from '../../modules/contact/contact.service';
import { MapService } from '../../modules/map/map.service';

import { ContactComponent } from './contact.component';
import { Row1Component } from './row1/row1.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Row3Component } from './row3/row3.component';
import { ContactResponseComponent } from './contact-response/contact-response.component';
import { ParallaxComponent } from './parallax/parallax.component';



@NgModule({
  declarations: [
    ContactComponent,
    Row1Component, 
    ContactFormComponent, 
    Row3Component, ContactResponseComponent, ParallaxComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ScheduleModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
