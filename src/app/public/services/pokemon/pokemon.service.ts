import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../../../interfaces/IPokemon';
import { IPokemonResponse } from '../../../interfaces/IResumePokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'https://pokeapi.co/api/v2';


  getResumePokemons(limit: number, offset: number): Observable<IPokemonResponse> {
    return this.http.get<IPokemonResponse>(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`)
  }

  getByName(name: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.baseUrl}/pokemon/${name}`)
  }
}
