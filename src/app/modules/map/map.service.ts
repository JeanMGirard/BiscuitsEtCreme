import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { MapInfo } from './map-info';

@Injectable()
export class MapService  {
  private info: MapInfo;

  constructor() {
    this.setGoogle();
  }

  get urlOfMap(): string{
    return 'https://www.google.com/maps'
      + '?' + 'key=' + this.info.apiKey
      + '&' + 'q=place_id:' + this.info.placeId;
  }
  get urlOfPlace(): string{
    return 'https://www.google.com/maps/place'
      + '?' + 'key=' + this.info.apiKey
      + '&' + 'q=place_id:' + this.info.placeId;
  }
  get urlOfCoordinates(): string{
    return 'https://www.google.com/maps/place/?api=1'
      + '&' + 'query=' + this.info.coordinates
      + '&' + 'query_place_id=' + this.info.placeId;
  }
  get urlOfDirection(): string{
    return 'https://www.google.com/maps/dir/?api=1'
      + '&' + 'query=' + this.info.coordinates
      + '&' + 'query_place_id=' + this.info.placeId;
  }
  get urlOfEmbeddedMap(): string{
    /**
     *                ** USAGE **
     * [In component]
     * -> import { DomSanitizer } from '@angular/platform-browser';
     * -> constructor(public sanitizer: DomSanitizer, public maps: MapService)
     * 
     * [In html]
     * [src]='sanitizer.bypassSecurityTrustResourceUrl(maps.urlOfEmbeddedMap)' 
     */
    return 'https://www.google.com/maps/embed/v1/place'
      + '?' + 'key=' + this.info.apiKey
      + '&' + 'q=place_id:' + this.info.placeId;
  }

  private setGoogle(): void {
    if(!this.info){
      this.info = {
        provider: 'google',
        placeId:  environment.google.maps.placeId,
        apiKey:   environment.google.maps.apiKey,
        shortUrl: environment.google.maps.shortUrl,
        coordinates: environment.google.maps.coordinates
      };
    }
  }
}
