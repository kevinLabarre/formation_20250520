import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


interface MenuItem {
  label: string;
  link?: string;
  children?: MenuItem[];
}


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    { label: 'Comptes bancaires', link: '/account' },
    { label: 'on-changes', link: '/on-changes' },
    { label: 'pokemons', link: '/pokemons' },
  ]
}
