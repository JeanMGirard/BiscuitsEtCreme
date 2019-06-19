import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';

import { ScheduleModule } from '../../components/schedule/schedule.module';

import { ContactComponent } from './contact.component';
import { Row1Component } from './row1/row1.component';
import { Row2Component } from './row2/row2.component';
import { Row3Component } from './row3/row3.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    ContactComponent,
    Row1Component, 
    Row2Component, 
    Row3Component
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ScheduleModule,
    FormsModule,
    AngularFireModule,
    AngularFirestoreModule
  ]
})
export class ContactModule { }
