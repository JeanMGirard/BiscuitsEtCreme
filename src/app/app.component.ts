import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { routeAnimation } from './animations';
import { HeaderService } from './components/header/header.service';
import { environment } from '../environments/environment';


declare let gtag: Function;
declare let fbq:  Function;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.less'
  ],
  animations: [ routeAnimation ]
})
export class AppComponent implements OnInit {
  title = 'BiscuitsEtCreme';

  constructor(
    private header: HeaderService,
    private router: Router
    ) {
    this.router.events.subscribe(this.onRouteChange.bind(this))
  }
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  hideHeader(){
    this.header.hidden = true;
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }
  onRouteChange(y: NavigationEnd){
    if(!environment.production) return;

    if(y instanceof NavigationEnd){
      try {
        if(typeof gtag === "function") gtag('config','UA-203605058', { 'page_path' : y.url});
        if(typeof fbq === "function")  fbq('track', 'PageView');
      } catch (e){
        // console.error(e.message)
      }
     }
  }
}
