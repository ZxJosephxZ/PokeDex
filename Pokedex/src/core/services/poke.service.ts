import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeResult } from '../models/poke-list.model';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  readonly #pokeUrl = 'https://pokeapi.co/api/v2';
  getPokeList(): HttpResourceRef<PokeResult | undefined>
  {
    return httpResource<PokeResult>(() => `${this.#pokeUrl}/pokemon?limit=151`);
  }
}
