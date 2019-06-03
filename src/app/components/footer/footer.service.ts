import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private hiddenDelay?: any;

  hide: Subject<boolean>    = new Subject<boolean>();
  hide$: Observable<boolean>  = this.hide.asObservable();
  
  constructor() { }

  set hidden(value: boolean){
    this.hide.next(value);
  }
  hideWithDelay(value: boolean){
    this.hiddenDelay = setTimeout(()=>{
      this.hide.next(value);
    }, 500);
  }
  hideOverride(value: boolean){
    clearTimeout(this.hiddenDelay);
    this.hide.next(value);
  }
}
