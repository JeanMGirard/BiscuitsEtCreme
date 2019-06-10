import { switchMap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { FooterService } from '../../../components/footer/footer.service';
import { HeaderService } from '../../../components/header/header.service';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

declare var $: any;

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: [
    '../menu.component.less',
    './sub-menu.component.less'
  ]
})
export class SubMenuComponent implements OnInit, OnDestroy {
  menus: Menu[];
  menu$: Observable<Menu>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MenuService,
    private location: Location,
    private header: HeaderService,
    private footer: FooterService
  ) {}

  ngOnInit() {
    this.header.expended = false;
    this.header.locked = true;
    this.footer.hideOverride(true);

    this.service.getMenus()
      .subscribe(menus => {
        this.menus = menus as Menu[];
      });
    this.menu$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMenu(params.get('menu')))
    );
    $(document).ready(() => { 
      $('body').addClass('loaded');
    });
  }
  
  ngOnDestroy(): void {
    this.header.expended = null;
    this.header.locked = false;
    this.footer.hideWithDelay(false);
  }

  gotoMenu() {
    this.router.navigate(['/menu']);
  }
  gotoPrev() {
    this.location.back();
  }

}
