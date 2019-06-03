import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';

import { ContactComponent } from './contact.component';
import { Row1Component } from './row1/row1.component';
import { Row2Component } from './row2/row2.component';
import { Row3Component } from './row3/row3.component';

@NgModule({
  declarations: [
    ContactComponent,
    Row1Component, 
    Row2Component, 
    Row3Component
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
