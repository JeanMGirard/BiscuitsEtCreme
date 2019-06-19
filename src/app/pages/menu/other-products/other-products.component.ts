import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: [
    '../menu.component.less',
    '../sub-menu/sub-menu.component.less',
    './other-products.component.less'
  ]
})
export class OtherProductsComponent implements OnInit{
  constructor(
    public dialog: MatDialog,
    private service: MenuService
    ) {}
  ngOnInit() {
    this.service.onArriveMenu();
  }

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
