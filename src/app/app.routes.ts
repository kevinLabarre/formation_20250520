import { Routes } from '@angular/router';
import { AccountComponent } from './public/components/account/account.component';
import { AccountResumeComponent } from './public/components/account-resume/account-resume.component';
import { RetirerComponent } from './public/components/retirer/retirer.component';
import { DepotComponent } from './public/components/depot/depot.component';
import { DemoOngletComponent } from './public/components/demo-onglet/demo-onglet.component';
import { Enfant1Component } from './public/components/enfant1/enfant1.component';
import { Enfant2Component } from './public/components/enfant2/enfant2.component';
import { LoginComponent } from './public/components/login/login.component';
import { OnCHangesDemoComponent } from './public/components/on-changes-demo/on-changes-demo.component';
import { PokemonsComponent } from './public/components/pokemons/pokemons.component';

export const routes: Routes = [
  { path: "", redirectTo: "account", pathMatch: "full" },
  { path: "account", component: AccountComponent, title: "Comptes" },
  { path: "on-changes", component: OnCHangesDemoComponent, title: "demo onChanges" },
  { path: "pokemons", component: PokemonsComponent, title: "pokemons" },
  {
    path: "detail-compte/:id", component: AccountResumeComponent, title: "détail du compte", children: [
      { path: "", redirectTo: "depot", pathMatch: "full" },
      { path: "depot", component: DepotComponent },
      { path: "retrait", component: RetirerComponent }
    ]
  },

  // Pour lazyloading sur la route "demo-onglets""
  {
    path: "demo-onglets",
    loadComponent: () => import('./public/components/demo-onglet/demo-onglet.component').then(m => m.DemoOngletComponent),
    children: [
      { path: "depot", component: Enfant1Component },
      { path: "retrait", component: Enfant2Component },
    ]
  },
  { path: "login", component: LoginComponent, title: "login" },


  { path: "**", redirectTo: "account" },
];
