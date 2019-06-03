import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SharedUiService {
  @Output() headerChange = new EventEmitter();

  headerHide$: Observable<boolean>;
  headerSmall$: Observable<boolean>;
  headerLarge$: Observable<boolean>;
  headerHide: Subject<boolean>;
  headerSmall: Subject<boolean>;
  headerLarge: Subject<boolean>;

  footerHide$: Observable<boolean>;
  

  constructor() { 
    this.headerHide  = new Subject<boolean>();
    this.headerSmall = new Subject<boolean>();
    this.headerLarge = new Subject<boolean>();

  }


}
