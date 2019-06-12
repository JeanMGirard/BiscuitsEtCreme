import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderService } from './components/header/header.service';
import { FooterService } from './components/footer/footer.service';

import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { SocialModule } from './modules/social/social.module';
import { ScheduleModule } from './components/schedule/schedule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    SocialModule,
    ScheduleModule
  ],
  providers: [
    HeaderService,
    FooterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
