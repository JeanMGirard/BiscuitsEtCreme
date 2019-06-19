import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { routeAnimation } from './animations';
import { HeaderService } from './components/header/header.service';

import { FirebaseApp } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

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
    private router: Router,
    public app: FirebaseApp
    ) {
  }
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  hideHeader(){
    this.header.expended = true;
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }
}
