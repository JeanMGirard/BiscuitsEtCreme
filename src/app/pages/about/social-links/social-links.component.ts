import { Component, OnInit } from '@angular/core';
import { SocialService } from '../../../modules/social/social.service';
import { Social } from '../../../modules/social/social';
@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.less']
})
export class SocialLinksComponent implements OnInit {
  links: Social[];

  constructor(
    private socials: SocialService
  ) { 
  }
  
  ngOnInit() {
    this.links = this.socials.getAll();
  }
}

