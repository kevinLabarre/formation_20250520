import { Component, OnInit } from '@angular/core';
import { IPokemonResponse, IResumePokemon } from '../../../interfaces/IResumePokemon';
import { IPokemon } from '../../../interfaces/IPokemon';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-pokemons',
  imports: [PokemonCardComponent],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit {

  pokemons: IResumePokemon[] = []

  pokemonsResponse?: IPokemonResponse


  limit: number = 20
  offset: number = 0

  constructor(private service: PokemonService) { }
  ngOnInit(): void {
    this.loadPokemon()
  }

  loadPokemon() {
    this.service.getResumePokemons(this.limit, this.offset).subscribe({
      next: (response) => this.pokemonsResponse = response
    })
  }

  previousPage() {
    this.offset -= this.limit
    if (this.offset < 0) this.offset = 0
    this.loadPokemon()
  }

  nextPage() {
    this.offset += this.limit
    this.loadPokemon()
  }

  get pagniationInfo(): { currentPage: number, lastPage: number } {
    // Math.floor : fonction qui renvoie le plus grand entier inférieur ou égal à un nombre.
    const currentPage = Math.floor(this.offset / this.limit) + 1

    let lastPage = 0
    if (this.pokemonsResponse) {
      lastPage = Math.ceil(this.pokemonsResponse.count / this.limit)
    }

    // Math.ceil() : fonction qui renvoie le plus petit entier supérieur ou égal à un nombre.


    // return { currentPage: currentPage, lastPage: lastPage } // Equivalent de la ligne suivante
    return { currentPage, lastPage }
  }

}


