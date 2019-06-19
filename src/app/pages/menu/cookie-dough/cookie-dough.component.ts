import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-cookie-dough',
  templateUrl: './cookie-dough.component.html',
  styleUrls: [
    '../menu.component.less',
    '../sub-menu/sub-menu.component.less',
    './cookie-dough.component.less'
  ]
})
export class CookieDoughComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private service: MenuService
    ) {}

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
  ngOnInit() {
    this.service.onArriveMenu();
  }
}
