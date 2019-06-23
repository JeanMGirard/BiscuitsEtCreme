import { Injectable } from '@angular/core';
import { WeekDay } from '@angular/common';

import { Promo } from './promo';
import { PROMOS } from './mock-promos';


@Injectable({
  providedIn: 'root'
})
export class PromosService { 
  lastUpdated: string;
  promos: {
    today: Promo;
    week: Promo[];
  };

  constructor() { 
    
  }

  getWeekday(day: number): Promo{
    this.checkUpdate();
    return this.promos.week[day];
  }
  get weekdays(): Promo[]{
    this.checkUpdate();
    return this.promos.week;
  }

  get today(): Promo {
    this.checkUpdate();
    return this.promos.today;
  }
  
  private checkUpdate() {
    if(this.lastUpdated || this.lastUpdated !== new Date().toDateString()) {
      this.lastUpdated = new Date().toDateString();
      this.updatePromos();
    }
  }
  private updatePromos() {
    let found = 0; 
    this.promos = {
      today: null,
      week: [null, null, null, null, null, null, null]
    }

    for(const p of PROMOS) {
      if (found >= 7) { 
        return; 
      } else if(p.weekday != null) { 
        this.promos.week[p.weekday] = p; 
        found++;
      }
    }

    this.promos.today = this.promos.week[new Date().getDay()];
  }
}
