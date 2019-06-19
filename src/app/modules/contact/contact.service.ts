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
    ContactService.schedule = SCHEDULE;
    if(!ContactService.schedule){
      // this.scheduleDoc = this.getInfo('schedule');
    }
    return ContactService.schedule;
  }
  loadContacts(): IContact {
    ContactService.contacts = CONTACTS;
    if(!ContactService.contacts){
      // this.contactDoc = this.getInfo('contacts');
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

  getSchedule() {
    return ContactService.schedule;
  }
  getPhone(): string {
    return ContactService.contacts.phone;
  }
  getEmail(): string {
    return ContactService.contacts.email;
  }
  getContactFormEmail(): string {
    return ContactService.contacts.email;
  }
  getPostal(): string {
    return ContactService.contacts.zipcode;
  }
  getCity(): string {
    return ContactService.contacts.city;
  }
  getState(): string {
    return ContactService.contacts.state;
  }
  getCountry(): string {
    return ContactService.contacts.country;
  }
  getAddressLine1(): string {
    return ContactService.contacts.address;
  }
  getAddressLine2(): string {
    const ct = this.getCity();
    const st = this.getState();
    const zp = this.getPostal();
    const cn = this.getCountry();
    return ct+', '+st+', '+zp+', '+cn;
  }

}
