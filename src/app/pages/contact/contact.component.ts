import { Component, OnInit } from '@angular/core';

declare var $: any;
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface Item { name: string; }

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;
  
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('body').addClass('loaded');
    });
  }

}
