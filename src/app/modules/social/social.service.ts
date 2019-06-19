import { Injectable } from '@angular/core';
import { Social } from './social';
import { SOCIALS } from './mock-social';

@Injectable()
export class SocialService {
  private socials: Social[];

  constructor() {
    this.socials = SOCIALS;
  }

  public getAll(): Social[]{
     return this.socials;
  }
  public getFromKey(key: string): Social {
    key = key.toLowerCase();
    for(const acc of this.socials){
      if(acc.key === key) { return acc; }
    }
    return null;
  }
  public getFacebook(): Social {
    return this.getFromKey('fb');
  }
  public getInstagram(): Social {
    return this.getFromKey('insta');
  }
  public getGoogle(): Social {
    return this.getFromKey('ggl');
  }
}
