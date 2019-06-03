import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from './pages/menu/animations';
import { HeaderService } from './components/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.less'
  ],
  animations: [ routeAnimation ]
})
export class AppComponent {
  title = 'BiscuitsEtCreme';

  constructor(private headerService: HeaderService) {
    
  }
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  hideHeader(){

    this.headerService.expended = true;
  }

  
}
