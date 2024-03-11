// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
      },
      {
        path: 'accueil',
        loadComponent: () => import('./demo/dashboard/accueil/accueil.component')
      },
      {
        path: 'component',
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'produits',
        loadComponent: () => import('./demo/content/produits/produits.component')
      },
      {
        path: 'reservation-produit',
        loadComponent: () => import('./demo/content/reservation-produit/reservation-produit.component')
      },
      {
        path: 'fournisseur',
        loadComponent: () => import('./demo/content/fournisseur/fournisseur.component')
      },
      {
        path: 'rapport',
        loadComponent: () => import('./demo/content/rapport/rapport.component')
      },
      {
        path: 'abonnement',
        loadComponent: () => import('./demo/content/abonnement/abonnement.component')
      },
      {
        path: 'notification',
        loadComponent: () => import('./demo/content/notification/notification.component')
      },
      {
        path: 'profil',
        loadComponent: () => import('./demo/content/profil/profil.component')
      },
      {
        path: 'parametre',
        loadComponent: () => import('./demo/content/parametre/parametre.component')
      },
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth/signup',
        loadComponent: () => import('./demo/authentication/sign-up/sign-up.component')
      },
      {
        path: 'auth/signin',
        loadComponent: () => import('./demo/authentication/sign-in/sign-in.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
