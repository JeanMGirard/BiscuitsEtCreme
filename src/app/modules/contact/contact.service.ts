// https://shekhargulati.com/2017/07/16/implementing-file-save-functionality-with-angular-4/
import { Injectable } from '@angular/core';
import { SCHEDULE, CONTACTS } from './mock-contact';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


export interface ISchedule {
  mon: string;  tue: string;  wed: string;   thu: string;
  fri: string;  sat: string;  sun: string;
}
export interface IContact {
  address: string;  city: string;  country: string;   email: string;
  phone: string;  state: string;  zipcode: string;
}

@Injectable()
export class ContactService {
  private static contacts: IContact;
  private static schedule: ISchedule;

  infos: AngularFirestoreCollection<any>;
  scheduleDoc: AngularFirestoreDocument<any>;
  contactDoc: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    this.infos = this.afs.collection('info', (ref) => ref.limit(10));
    this.loadSchedule();
    this.loadContacts();
  }

  getData(): Observable<any[]> {
    // ['added', 'modified', 'removed']
    return this.infos.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }
  loadSchedule(): ISchedule {
    if(!ContactService.schedule) {
      this.afs.collection('info').snapshotChanges().subscribe(data => {
        (ContactService.schedule as any) = data.map(e => {
          return {id: e.payload.doc.id, ...e.payload.doc.data()} as any;
        }).filter(e => (e.docId === 'schedule'))[0];
      });
    }
    return ContactService.schedule;
  }
  loadContacts(): IContact {
    if(!ContactService.contacts){
        ContactService.contacts = CONTACTS;
    }
    return ContactService.contacts;
  }
  getInfo(id: string) {
    return this.afs.doc<any>(`info/${id}`);
  }
  createInfo(data: any) {
    const info = {};
    return this.infos.add(info);
  }
  updateInfo(id: string, data: any) {
    return this.getInfo(id).update(data);
  }
  deleteInfo(id: string) {
    return this.getInfo(id).delete();
  }

  get schedule() {
    return ContactService.schedule;
  }
  get phone(): string {
    return ContactService.contacts.phone;
  }
  get email(): string {
    return ContactService.contacts.email;
  }
  get email2(): string {
    return ContactService.contacts.email;
  }
  get postal(): string {
    return ContactService.contacts.zipcode;
  }
  get city(): string {
    return ContactService.contacts.city;
  }
  get state(): string {
    return ContactService.contacts.state;
  }
  get country(): string {
    return ContactService.contacts.country;
  }
  get addressLine1(): string {
    return ContactService.contacts.address;
  }
  get addressLine2(): string {
    const ct = this.city;
    const st = this.state;
    const zp = this.postal;
    const cn = this.country;
    return ct+', '+st+', ' + zp;
  }

}
