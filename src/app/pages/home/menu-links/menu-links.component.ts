import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


import { MenuService } from '../../menu/menu.service';
import { Menu } from '../../menu/menu';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.less']
})
export class MenuLinksComponent implements OnInit {
  menus$: Observable<Menu[]>;
  iconMenu = faBookOpen;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menus$ = this.menuService.getMenus();
  }
  goToMenu(menu: Menu){
    this.menuService.goToMenu(menu);
  }
  goToMenuHome(){
    this.menuService.goToMenuHome();
  }
  goToMenuStr(menu: string){
    this.menuService.goToMenuStr(menu);
  }
}
