import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/layout/public-layout/public-layout.component';
import { PUBLIC_ROUTES } from './public/routes/public.routes';
import { adminGuard } from './admin/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',

    // SANS LAZYLOADING
    component: PublicLayoutComponent,

    // Charge les routes enfants SANS LASYLOADING
    // ==> Toutes les routes 'enfants' sont les routes de l'espace public
    children: PUBLIC_ROUTES,
    canActivate: [adminGuard],

    // Si je veux "guarder" les routes enfants
    // canActivateChild: [adminGuard]
  },

  // REMPLACER PAR LE MODULE ADMIN
  {
    path: 'admin',

    // Avec 'component' , import classique (donc pas de lazyLoading)
    // component: PublicLayoutComponent,

    // Pour faire le lazy loading, nous devons utiliser 'loadComponent' à la place de 'component'  AVEC LAZYLOADING
    loadComponent: () => import('./admin/layout/admin-layout/admin-layout.component').then(c => c.AdminLayoutComponent),

    // Charge les routes enfants AVEC LAZYLOADING
    // ==> Toutes les routes 'enfants' sont les routes de l'espace public
    loadChildren: () => import('./admin/routes/admin.route').then(r => r.ADMIN_ROUTES)
  }
];
