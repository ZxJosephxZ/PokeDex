import { Component, inject, input } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [TitleCasePipe, NgOptimizedImage, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export default class Details {
readonly name = input<string>('');
readonly #pokeService = inject(PokeService);
protected readonly detailsPokemon = this.#pokeService.getPokemon(this.name);
}
