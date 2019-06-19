import { Component, OnInit } from '@angular/core';
import { SocialService } from '../../../modules/social/social.service';
import { Social } from '../../../modules/social/social';
@Component({
  selector: 'about-row3',
  templateUrl: './row3.component.html',
  styleUrls: ['./row3.component.less']
})
export class Row3Component implements OnInit {
  links: Social[];

  constructor(
    private socials: SocialService
  ) { 
  }

  ngOnInit() {
    this.links = this.socials.getAll();
  }

}
