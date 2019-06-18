import { Injectable } from '@angular/core';
import { Social } from './social';
import { SOCIALS } from './mock-social';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  private socials: Social[];

  constructor() {
    this.socials = SOCIALS;
   }


  public getFacebook(): Social{
    for(const acc of this.socials){
      if(acc.ref === 'fb'){ return acc; }
    }
    return null;
  }
}
