import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { HeaderService } from './components/header/header.service';
import { FooterService } from './components/footer/footer.service';

import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { SocialModule } from './modules/social/social.module';
import { ScheduleModule } from './components/schedule/schedule.module';
import { MenuService } from './pages/menu/menu.service';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = environment.firebase;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    SocialModule,
    ScheduleModule
  ],
  providers: [
    HeaderService,
    FooterService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
