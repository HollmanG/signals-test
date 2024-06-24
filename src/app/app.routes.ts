import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes'),
  },
  { path: 'signals', loadChildren: () => import('./signals/signals.routes') },
  {
    path: '**',
    redirectTo: 'products',
  },
];
