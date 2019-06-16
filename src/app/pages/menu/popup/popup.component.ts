import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare var $: any;

export interface ItemList {
  name?: string;
  items: string[];
}
export interface DialogData {
  wide?: boolean;
  name: string;
  lists: ItemList[];
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent {

  constructor(
    public dialog: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {  }

  close(): void {
    this.dialog.close();
  }

}
