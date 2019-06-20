import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** */
// import { HeaderComponent } from './header/header.component';
import { HeaderService } from './header/header.service';

@NgModule({
  declarations: [
  //  HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  //  HeaderComponent
  ],
  providers:[
    HeaderService
  ]
})
export class UiModule { }
