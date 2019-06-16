import { Injectable } from '@angular/core';
import { WeekDay } from '@angular/common';

import { Promo } from './promo';
import { PROMOS } from './mock-promos';


@Injectable({
  providedIn: 'root'
})
export class PromosService { 

  constructor() { }

  getToday(): Promo{
    return this.getWeekday(new Date().getDay());
  }
  getWeekday(day: number): Promo{
    for(let i=0; i< PROMOS.length; i++){
      if(PROMOS[i].weekday != null && PROMOS[i].weekday === day) return PROMOS[i];
    }
    if(day > 6)
      throw new Error('PromosService.getWeekday(<integer/WorkDay>): arg must be int <= 6');

    // else if(typeof day === "WeekDay")
    //  PROMOS.forEach((promo)=>{if(promo.weekday != null && promo.weekday === day) return promo;});
    
    return null;
  }
  getWeekdays(): Promo[]{
    let found = 0; 
    let weekdays: Promo[] = [null, null, null, null, null, null, null];


    for(let i=0; i< PROMOS.length; i++){
      if(found >= 7) return weekdays;
      if(PROMOS[i].weekday != null) {
        weekdays[PROMOS[i].weekday] = PROMOS[i];
        found++;
      }
    }
    return weekdays;
  }
}
