import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { MenuService } from '../../menu/menu.service';
import { Menu } from '../../menu/menu';

@Component({
  selector: 'app-row2',
  templateUrl: './row2.component.html',
  styleUrls: ['./row2.component.less']
})
export class Row2Component implements OnInit {
  menus$: Observable<Menu[]>;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menus$ = this.menuService.getMenus();
  }
  goToMenu(menu: Menu){
    this.menuService.goToMenu(menu);
  }

}
