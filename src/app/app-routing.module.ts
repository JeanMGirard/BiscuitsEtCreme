import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren:  () => import('./pages/home/home.module').then(mod => mod.HomeModule)
  },
  { path: 'info', loadChildren:  () => import('./pages/about/about.module').then(mod => mod.AboutModule)
  },
  { path: 'contact', loadChildren:  () => import('./pages/contact/contact.module').then(mod => mod.ContactModule)
  },
  { path: 'menu', loadChildren:  () => import('./pages/menu/menu.module').then(mod => mod.MenuModule)
  },
  { path: 'promo', loadChildren:  () => import('./pages/promotions/promotions.module').then(mod => mod.PromotionsModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// ng update @angular/core --migrate-only migration-v9-undecorated-classes-with-di
// npm install @angular/animations@latest @angular/common@latest @angular/compiler@latest @angular/core@latest @angular/forms@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest
