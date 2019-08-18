import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren:  () => import('./pages/home/home.module')
      .then(mod => mod.HomeModule)
  },{ 
    path: 'info', loadChildren:  () => import('./pages/about/about.module')
      .then(mod => mod.AboutModule)
  },{ 
    path: 'contact', loadChildren:  () => import('./pages/contact/contact.module')
      .then(mod => mod.ContactModule)
  },{ 
    path: 'menu', loadChildren:  () => import('./pages/menu/menu.module')
      .then(mod => mod.MenuModule)
  },{ 
    path: 'promo', loadChildren:  () => import('./pages/promotions/promotions.module')
      .then(mod => mod.PromotionsModule)
  },{ 
    path: 'commandes', loadChildren:  () => import('./pages/commandes/commandes.module')
      .then(mod => mod.CommandesModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
