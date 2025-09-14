import { Component, input } from '@angular/core';
import { Result } from '../../core/models/poke-list.model';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { PokeImgPipePipe } from './poke-img-pipe-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [TitleCasePipe, PokeImgPipePipe, NgOptimizedImage, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  readonly pokeResult = input.required<Result>();
}
