import { switchMap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { FooterService } from '../../../components/footer/footer.service';
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
    private footer: FooterService
  ) {
    this.menu$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMenu(params.get('menu')))
    );
  }

  ngOnInit() {
    this.footer.hideOverride(true);
    
    this.service.getMenus()
      .subscribe(menus => {
        this.menus = menus as Menu[];
      });
    
    $(document).ready(() => { 
      $('body').addClass('loaded');
    });
  }
  
  ngOnDestroy(): void {
    this.service.onQuitMenu();
    this.footer.hideWithDelay(false);
  }

  gotoMenu() {
    this.service.onQuitMenu();
    this.router.navigate(['/menu']);
  }
  gotoPrev() {
    this.service.onQuitMenu();
    this.router.navigate(['/menu']);
    // this.location.back();
  }

}
