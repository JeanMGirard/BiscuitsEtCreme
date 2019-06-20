import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// biscuitsetcreme App Modules
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScheduleModule } from './components/schedule/schedule.module';

import { HeaderService } from './components/header/header.service';
import { FooterService } from './components/footer/footer.service';
import { MenuService } from './pages/menu/menu.service';
import { MapService } from './modules/map/map.service';
import { ContactService } from './modules/contact/contact.service';
import { MessageService } from './modules/contact/message.service';
import { SocialService } from './modules/social/social.service';

// @angular/fire/ Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ScheduleModule,
    AngularFireModule.initializeApp(environment.firebase, 'biscuitsetcreme'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule
  ],
  providers: [
    MenuService,
    HeaderService,
    FooterService,
    ContactService,
    SocialService,
    MessageService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
