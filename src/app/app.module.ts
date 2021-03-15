import 'core-js';
import 'cross-fetch/polyfill';
import 'proxy-polyfill'

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { ProductService } from './modules/products/product.service';

// @angular/fire/ Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/analytics';


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
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'biscuitsetcreme'),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
  ],
  providers: [
    MenuService,
    HeaderService,
    FooterService,
    ContactService,
    SocialService,
    MessageService,
    MapService,
    ProductService,
    ScreenTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
