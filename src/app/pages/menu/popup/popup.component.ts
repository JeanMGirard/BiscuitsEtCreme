import {Component, Inject, OnInit, HostListener} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare var $: any;

export interface ItemList {
  name?: string;
  items: string[];
}
export interface DialogData {
  small?: boolean;
  wide?: boolean;
  dialogclass?: string;
  name: string;
  lists: ItemList[];
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit {
  classes = '';
  maxCols = 2;
  defaultCols = 2;
  columns = 2;
  
  constructor(
    public dialog: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {  }

  ngOnInit(): void {
    if(!this.data.dialogclass){
      this.data.dialogclass = '';
    }
 
    if(this.data.wide) {
      this.classes = 'wide';
      this.defaultCols = 3;

    } else if(this.data.small) {
      this.classes = 'narrow';
      this.defaultCols = 1;

    } else {
      this.classes = 'medium';
      this.defaultCols = 2;
    }
    this.calcColumns();
  }

  @HostListener('window:resize', ['$event'])
  calcColumns() {
    const winWidth = window.innerWidth;
    switch(true){
      case (winWidth<700):
        this.maxCols = 1;
        break;
      case (winWidth>1100):
        this.maxCols = 3;
        break;
      case (true): 
        this.maxCols = 2;
        break;
    }
    if(this.maxCols < this.defaultCols) {
      this.columns = this.maxCols;
    } else {
      this.columns = this.defaultCols;
    }

    this.dialog.updateSize((this.columns * 440) +'px');
    
  }

  close(): void {
    this.dialog.close();
    
  }

}
