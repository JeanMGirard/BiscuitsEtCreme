import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Menu } from './menu';
import { MENUS } from './mock-menus';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getMenus(): Observable<Menu[]> {
    return of(MENUS);
  }
  getMenu(name: string) {
    return this.getMenus().pipe(
      map((menus: Menu[]) => menus.find(menu => menu.name === name))
    );
  }

  constructor() { }
}
