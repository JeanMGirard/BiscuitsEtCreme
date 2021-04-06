// https://shekhargulati.com/2017/07/16/implementing-file-save-functionality-with-angular-4/
import { Injectable } from '@angular/core';
import { SCHEDULE, CONTACTS } from './mock-contact';
import { from } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';

declare let google: any;

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
  private static contact: IContact;

  infos: AngularFirestoreCollection<any>;
  scheduleDoc: AngularFirestoreDocument<any>;
  contactDoc: AngularFirestoreDocument<any>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.infos = this.afs.collection('info', (ref) => ref.limit(10));
    this.loadGoogleInfo().catch(console.error);
    // this.loadContacts();
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
  async loadGoogleInfo(): Promise<any> {
    try {
      const apiKey = environment.google?.maps?.apiKey;
      const placeId = environment.google?.maps?.placeId;
      if(!apiKey || !placeId) { return null; }
      const service = new google.maps.places.PlacesService(document.createElement('div'));
      const request = {placeId, fields: ['opening_hours', 'formatted_phone_number', 'formatted_address', 'address_component']};
      const results: null | any = await new Promise((res) => {
        service.getDetails(request, (place, status) => {
          console.log(place)
          if (status === google.maps.places.PlacesServiceStatus.OK)
            res(place)
          else res(null);
        });
      })
      if(!results) return null;
      const phone = results.formatted_phone_number;
      const weekday_text: string[] = results.opening_hours?.weekday_text;
      const adr: any[] = results.address_components

      // console.log(weekday_text)
      if(Array.isArray(adr)){
        ContactService.contact = {
          address: [
            adr.find(a => a.types.includes('street_number')).short_name,
            adr.find(a => a.types.includes('route')).short_name
          ].join(', '),
          city: adr.find(a => a.types.includes('locality')).short_name,
          country: adr.find(a => a.types.includes('country')).short_name,
          email: CONTACTS.email,
          phone,
          state: adr.find(a => a.types.includes('administrative_area_level_1')).short_name,
          zipcode: adr.find(a => a.types.includes('postal_code')).short_name,
        }
      }
      if(Array.isArray(weekday_text)) {
        ContactService.schedule = {
          mon: weekday_text.find(w => w.startsWith('Monday'))?.replace('Monday: ', ''),
          tue: weekday_text.find(w => w.startsWith('Tuesday'))?.replace('Tuesday: ', ''),
          wed: weekday_text.find(w => w.startsWith('Wednesday'))?.replace('Wednesday: ', ''),
          thu: weekday_text.find(w => w.startsWith('Thursday'))?.replace('Thursday: ', ''),
          fri: weekday_text.find(w => w.startsWith('Friday'))?.replace('Friday: ', ''),
          sat: weekday_text.find(w => w.startsWith('Saturday'))?.replace('Saturday: ', ''),
          sun: weekday_text.find(w => w.startsWith('Sunday'))?.replace('Sunday: ', ''),
        };
      }
      return true;
    } catch (e){
      console.error(e)
      return null;
    }
  }
  async loadSchedule(): Promise<ISchedule> {
    if(!ContactService.schedule) {
      await this.loadGoogleInfo()
      if(ContactService.schedule){
        return ContactService.schedule;
      }
      this.afs.collection('info').snapshotChanges().subscribe(data => {
        (ContactService.schedule as any) = data.map(e => {
          return {id: e.payload.doc.id, ...(e.payload.doc.data() as any) } as any;
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

  get schedule(): Observable<ISchedule> {
    return from(new Promise<ISchedule>(async (res) => {
      while(!ContactService.schedule){
        await new Promise((res2) => setTimeout(res2, 50));
      }
      res(ContactService.schedule);
    }));
  }
  get contacts(): Observable<IContact> {
    return from(new Promise<IContact>(async (res) => {
      while(!ContactService.contact){
        await new Promise((res2) => setTimeout(res2, 50));
      }
      console.log(ContactService.contact)
      res(ContactService.contact);
    }));
  }
  get phone(): string {
    return ContactService.contact?.phone;
  }
  get email(): string {
    return ContactService.contact?.email;
  }
  get email2(): string {
    return ContactService.contact?.email;
  }
  get postal(): string {
    return ContactService.contact?.zipcode;
  }
  get city(): string {
    return ContactService.contact?.city;
  }
  get state(): string {
    return ContactService.contact?.state;
  }
  get country(): string {
    return ContactService.contact?.country;
  }
  get addressLine1(): string {
    return ContactService.contact?.address;
  }
  get addressLine2(): string {
    const ct = this.city;
    const st = this.state;
    const zp = this.postal;
    const cn = this.country;
    return ct+', '+st+', ' + zp;
  }

}
