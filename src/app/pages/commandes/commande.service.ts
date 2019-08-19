import { Injectable } from '@angular/core';
import { ITEMGROUPS } from './mock-item-groups';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor() { }

  getItemGroups(){
    return of(ITEMGROUPS);
  }
}
