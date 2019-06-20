// https://shekhargulati.com/2017/07/16/implementing-file-save-functionality-with-angular-4/
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MessageService {
  messages: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.messages = this.afs.collection('messages', (ref) => ref.orderBy('date', 'desc').limit(5));
  }
  getData(): Observable<any[]> {
    // ['added', 'modified', 'removed']
    return this.messages.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }
  getMessage(id: string) {
    return this.afs.doc<any>(`messages/${id}`);
  }
  createMessage(data: any) {
    const message = {
      name:  data.name, 
      email: data.email,
      content: data.description,
      note: ((data.star/5)*100),
      date: new Date().toLocaleString()
    };
    return this.messages.add(message);
  }
  updateMessage(id: string, data: any) {
    return this.getMessage(id).update(data);
  }
  deleteMessage(id: string) {
    return this.getMessage(id).delete();
  }

}
