import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: [
    '../menu.component.less',
    '../sub-menu/sub-menu.component.less',
    './other-products.component.less'
  ]
})
export class OtherProductsComponent {
  constructor(public dialog: MatDialog) {}

  openDialogLarge(lists: any): void{
    this.dialog.open(PopupComponent, {
      width: '800px',
      data: lists
    });
  }
  openDialog(lists: any): void{
    this.dialog.open(PopupComponent, {
      width: '500px',
      data: lists
    });
  }
}
