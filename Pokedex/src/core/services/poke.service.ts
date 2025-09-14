import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { PokeResult } from '../models/poke-list.model';
import { pokemon_mo } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  readonly #pokeUrl = 'https://pokeapi.co/api/v2';
  getPokeList(): HttpResourceRef<PokeResult | undefined>
  {
    return httpResource<PokeResult>(() => `${this.#pokeUrl}/pokemon?limit=151`);
  }
  getPokemon(name:Signal<string>)
  {
    return httpResource<pokemon_mo>(() => `${this.#pokeUrl}/pokemon/${name()}`);
  }
}
