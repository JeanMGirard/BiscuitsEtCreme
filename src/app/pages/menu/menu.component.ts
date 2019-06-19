import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routeAnimation, animateTimer } from '../../animations';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { FooterService } from '../../components/footer/footer.service';

import { MenuService } from './menu.service';
import { Menu } from './menu';

declare var $: any;
import CircleType from 'circletype';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  animations: [ routeAnimation ]
})
export class MenuComponent implements OnInit, OnDestroy {
  menus$: Observable<Menu[]>;
  selectedMenu: string;

  constructor(
    private service: MenuService,
    private router: Router,
    private route: ActivatedRoute,
    private footer: FooterService
  ) { }

  ngOnInit(): void {
    this.service.onArriveMenuHome();
    this.menus$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedMenu = params.get('menu');
        return this.service.getMenus();
      })
    );

    $(document).ready(() => { 
      $('body').addClass('loaded');
    });
  }
  goToMenu(menu: Menu){
    this.service.goToMenu(menu);
  }
  ngOnDestroy(): void {
    this.service.onQuitMenuHome();
  }
}