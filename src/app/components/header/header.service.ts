import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  lock: Subject<boolean>    = new Subject<boolean>();
  hide: Subject<boolean>    = new Subject<boolean>();
  expend: Subject<boolean>  = new Subject<boolean>();

  lock$: Observable<boolean>  = this.lock.asObservable();
  hide$: Observable<boolean>  = this.hide.asObservable();
  expend$: Observable<boolean>= this.expend.asObservable();
  
  constructor() { }

  set locked(value: boolean){
    this.lock.next(value);
  }

  set hidden(value: boolean){
    this.hide.next(value);
  }

  set expended(value: boolean){
    this.expend.next(value);
  }
}
