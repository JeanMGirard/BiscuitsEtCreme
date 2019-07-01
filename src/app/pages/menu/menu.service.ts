import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';

import { Menu } from './menu';
import { MENUS } from './mock-menus';
import { HeaderService } from '../../components/header/header.service';
import { FooterService } from '../../components/footer/footer.service';

@Injectable()
export class MenuService {

  constructor(
    private header: HeaderService,
    private footer: FooterService,
    private router: Router
    ) { 
    }

  get menus(): Menu[] {
    return MENUS;
  }
  getMenus(): Observable<Menu[]> {
    return of(MENUS);
  }
  getMenu(name: string) {
    return this.getMenus().pipe(
      map((menus: Menu[]) => menus.find(menu => menu.name === name))
    );
  } 

  public onArriveMenuHome(){
    this.footer.hideOverride(true);
  }
  public onArriveMenu(){
    this.header.expended = false;
    this.header.locked = true;
  }
  public onQuitMenuHome(){
    this.footer.hideWithDelay(false);
  }
  public onQuitMenu(){
    this.header.expended = null;
    this.header.locked = false;
  }
  public goToMenu(menu: Menu){
    this.onArriveMenu();
    this.router.navigate(['/menu', menu.name]);
  }
  public goToMenuHome(){
    this.onArriveMenuHome();
    this.router.navigate(['/menu']);
  }
  public goToMenuStr(menuRef: string){
    for(let menu of this.menus){
      switch(menuRef){
        case menu.name:
        case menu.title:
          this.goToMenu(menu);
          return null;
      }
    }
    this.goToMenuHome();
  }
}
