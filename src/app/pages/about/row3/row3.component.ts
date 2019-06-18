import { Component, OnInit } from '@angular/core';
import { SocialService } from '../../../modules/social/social.service';

@Component({
  selector: 'about-row3',
  templateUrl: './row3.component.html',
  styleUrls: ['./row3.component.less']
})
export class Row3Component implements OnInit {

  constructor(
    private socials: SocialService
  ) { }

  ngOnInit() {
  }

}
