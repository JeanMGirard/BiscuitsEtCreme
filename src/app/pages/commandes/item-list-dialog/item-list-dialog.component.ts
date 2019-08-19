import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'commandes-item-list-dialog',
  templateUrl: './item-list-dialog.component.html',
  styleUrls: ['./item-list-dialog.component.less']
})
export class ItemListDialogComponent implements OnInit {
  @Input()
  Group: any;
  
  constructor() { }

  ngOnInit() {
  }

}
