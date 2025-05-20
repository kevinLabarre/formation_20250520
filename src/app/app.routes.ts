import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/layout/public-layout/public-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,

    // Charge les routes enfants
    // ==> Toutes les routes 'enfants' sont les routes de l'espace public
    loadChildren: () => import('./public/routes/public.routes').then(r => r.PUBLIC_ROUTES),

  },

  // REMPLACER PAR LE MODULE ADMIN
  {
    path: 'admin',

    // Avec 'component' , import classique (donc pas de lazyLoading)
    // component: PublicLayoutComponent,

    // Pour faire le lazy loading, nous devons utiliser 'loadComponent' à la place de 'component'
    loadComponent: () => import('./admin/layout/admin-layout/admin-layout.component').then(c => c.AdminLayoutComponent),

    // Charge les routes enfants
    // ==> Toutes les routes 'enfants' sont les routes de l'espace public
    loadChildren: () => import('./admin/routes/admin.route').then(r => r.ADMIN_ROUTES)
  }
];
