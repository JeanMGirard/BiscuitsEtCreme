import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandesComponent } from './commandes.component';


import { CommandesRoutingModule } from './commandes-routing.module';
import { ItemListDialogComponent } from './item-list-dialog/item-list-dialog.component';

@NgModule({
  declarations: [
    CommandesComponent, 
    ItemListDialogComponent],
  imports: [
    CommonModule,
    CommandesRoutingModule
  ]
})
export class CommandesModule { }
