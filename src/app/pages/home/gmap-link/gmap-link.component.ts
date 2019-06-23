import { Component, OnInit } from '@angular/core';

import { MapService } from '../../../modules/map/map.service';

@Component({
  selector: 'app-gmap-link',
  templateUrl: './gmap-link.component.html',
  styleUrls: ['./gmap-link.component.less']
})
export class GmapLinkComponent implements OnInit {
  mapurl: string;

  constructor(private maps: MapService) { }

  ngOnInit() {
    this.mapurl = this.maps.urlOfMap;
  }

}
