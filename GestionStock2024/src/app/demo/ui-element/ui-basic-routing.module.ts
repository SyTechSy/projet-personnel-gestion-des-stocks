import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [

      // // Path pour les Stocks

      {
        path: 'ajustement-des-stocks',
        loadComponent: () => import('./pages/stocks/ajustement-des-stocks/ajustement-des-stocks.component')
      },
      {
        path: 'suivi-inventaire',
        loadComponent: () => import('./pages/stocks/suivi-inventaire/suivi-inventaire.component')
      },
      {
        path: 'seuil-des-stocks',
        loadComponent: () => import('./pages/stocks/seuil-des-stocks/seuil-des-stocks.component')
      },
      {
        path: 'deplacements-des-stocks',
        loadComponent: () => import('./pages/stocks/deplacements-des-stocks/deplacements-des-stocks.component')
      },
      {
        path: 'planning-deplacement',
        loadComponent: () => import('./pages/stocks/planning-deplacement/planning-deplacement.component')
      },
      {
        path: 'transfert-des-stock',
        loadComponent: () => import('./pages/stocks/transfert-des-stock/transfert-des-stock.component')
      },
      {
        path: 'planning-transfert',
        loadComponent: () => import('./pages/stocks/planning-transfert/planning-transfert.component')
      },
      {
        path: 'emplacements-des-stocks',
        loadComponent: () => import('./pages/stocks/emplacements-des-stocks/emplacements-des-stocks.component')
      },

      // // Path pour les Achats

      {
        path: 'mes-commande',
        loadComponent: () => import('./pages/achats/mes-commande/mes-commande.component')
      },
      {
        path: 'factures-des-clients',
        loadComponent: () => import('./pages/achats/factures-des-clients/factures-des-clients.component')
      },
      {
        path: 'paiements-recus',
        loadComponent: () => import('./pages/achats/paiements-recus/paiements-recus.component')
      },
      {
        path: 'retour-des-ventes',
        loadComponent: () => import('./pages/achats/retour-des-ventes/retour-des-ventes.component')
      },
      {
        path: 'achat-des-reaprovisionnements',
        loadComponent: () => import('./pages/achats/achat-des-reaprovisionnements/achat-des-reaprovisionnements.component')
      },
      {
        path: 'commande-des-clients',
        loadComponent: () => import('./pages/achats/commande-des-clients/commande-des-clients.component')
      },

      // // Path pour les Personnage
      
      {
        path: 'membres',
        loadComponent: () => import('./pages/personnage/membres/membres.component')
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule {}
