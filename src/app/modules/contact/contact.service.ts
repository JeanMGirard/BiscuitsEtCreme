// https://shekhargulati.com/2017/07/16/implementing-file-save-functionality-with-angular-4/
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {}


  getPhone(): string {
    return '+1 450-508-4066';
  }
  getEmail(): string {
    return 'contact@BiscuitsEtCreme.ca';
  }
  getContactFormEmail(): string {
    return 'girard.jm77@gmail.com';
  }
  getPostal(): string {
    return 'J7J 1K3';
  }
  getCity(): string {
    return 'Mirabel';
  }
  getAddressLine1(): string {
    return '13619 Boulevard Curé-Labelle';
  }
  getAddressLine2(): string {
    return 'Mirabel, QC J7J 1K3, Canada';
  }

}
