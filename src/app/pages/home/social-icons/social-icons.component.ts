import { Component, OnInit } from '@angular/core';
import { SocialService } from '../../../modules/social/social.service';
import { Social } from '../../../modules/social/social';

declare var $: any;

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.less']
})
export class SocialIconsComponent implements OnInit {
  socials: Social[];

  constructor(
    private socialSecive: SocialService
  ) { }

  ngOnInit() {
    this.socials = this.socialSecive.getAll();

    $(document).ready(()=>{
      $('#home-social-icons').addClass('loaded');
    });
  }

}
