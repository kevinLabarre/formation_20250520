import { Routes } from "@angular/router";
import { AccountComponent } from "../components/account/account.component";
import { OnCHangesDemoComponent } from "../components/on-changes-demo/on-changes-demo.component";
import { PokemonsComponent } from "../components/pokemons/pokemons.component";
import { AccountResumeComponent } from "../components/account-resume/account-resume.component";
import { DepotComponent } from "../components/depot/depot.component";
import { RetirerComponent } from "../components/retirer/retirer.component";
import { Enfant1Component } from "../components/enfant1/enfant1.component";
import { Enfant2Component } from "../components/enfant2/enfant2.component";
import { LoginComponent } from "../components/login/login.component";
import { SignalComponent } from "../components/signal/signal.component";

export const PUBLIC_ROUTES: Routes = [
  { path: "", redirectTo: "account", pathMatch: "full" },
  { path: "account", component: AccountComponent, title: "Comptes" },
  { path: "on-changes", component: OnCHangesDemoComponent, title: "demo onChanges" },
  { path: "pokemons", component: PokemonsComponent, title: "pokemons" },
  { path: "signal", component: SignalComponent, title: "signal" },
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
    loadComponent: () => import('../components/demo-onglet/demo-onglet.component').then(m => m.DemoOngletComponent),

    children: [
      { path: "depot", component: Enfant1Component },
      { path: "retrait", component: Enfant2Component },
    ]
  },
  { path: "login", component: LoginComponent, title: "login" },
]
