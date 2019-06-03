import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { MenuService } from '../menu/menu.service';
import { Menu } from '../menu/menu';

import CircleType from 'circletype';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {



    $(document).ready(() => {
      (new CircleType(document.getElementById('row-1-intro'))).radius(1200);
      $('#row-1-intro').addClass('loaded');
      $('body').addClass('loaded');
    });
  }

} 