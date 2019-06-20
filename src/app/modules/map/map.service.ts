import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { MapInfo } from './map-info';

@Injectable()
export class MapService  {
  private info: MapInfo;

  constructor() {
    this.setGoogle();
  }

  public getMapUrl(): string{
    let url = 'https://www.google.com/maps';
    url += '?' + 'key=' + this.info.apiKey;
    url += '&' + 'q=place_id:' + this.info.placeId;
    return url;
  }
  public getPlaceUrl(): string{
    let url = 'https://www.google.com/maps/place';
    url += '?' + 'key=' + this.info.apiKey;
    url += '&' + 'q=place_id:' + this.info.placeId;
    return url;
  }
  public getCoordUrl(): string{
    let url = 'https://www.google.com/maps/place/?api=1';
    url += '&' + 'query=' + this.info.coordinates;
    url += '&' + 'query_place_id=' + this.info.placeId;
    return url;
  }
  public getDirectionUrl(): string{
    let url = 'https://www.google.com/maps/dir/?api=1';
    url += '&' + 'query=' + this.info.coordinates;
    url += '&' + 'query_place_id=' + this.info.placeId;
    return url;
  }
  public getUnsanitizedEmbedUrl(): string{
    /**
     *                ** USAGE **
     * [In component]
     * import { DomSanitizer } from '@angular/platform-browser';
     *  ...
     *  -> constructor(public sanitizer: DomSanitizer)
     *  -> this.embedded = this.maps.getUnsanitizedEmbedUrl();
     * 
     * [In html]
     * [src]='sanitizer.bypassSecurityTrustResourceUrl(embedded)' 
     */

    let link = 'https://www.google.com/maps/embed/v1/place';

    link += '?' + 'key=' + this.info.apiKey;
    link += '&' + 'q=place_id:' + this.info.placeId;
    return link;
  }

  private setGoogle(): void {
    this.info = {
      provider: 'google',
      placeId:  environment.google.maps.placeId,
      apiKey:   environment.google.maps.apiKey,
      shortUrl: environment.google.maps.shortUrl,
      coordinates: environment.google.maps.coordinates
    };
  }
}
