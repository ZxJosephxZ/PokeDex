import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeResult } from '../models/poke-list.model';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  readonly #pokeUrl = 'https://pokeapi.co/api/v2';
  getPokeList()
  {
    return httpResource<PokeResult>(() => `${this.#pokeUrl}/pokemon?limit=151`);
  }
}
