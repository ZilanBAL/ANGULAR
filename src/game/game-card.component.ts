import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Game } from './game.model';
import { FlixButton } from '../layouts/flix-button/flix-button';

@Component({
  imports: [NgOptimizedImage, FlixButton],
  selector: 'game-card',
  templateUrl: './game-card.template.html',
})
export class GameCard {
  // Input property: permet de recevoir des données depuis le parent (App) pour afficher les details d'un jeu.
  // required<Game>: indique que cette propriété est obligatoire et doit être de type Game.
  game = input.required<Game>();
  favorite = output<number>();
  isFavorite = input<boolean>(false);
  get whislistLabel(): string {
    const verb = this.isFavorite() ? 'Retirer de' : 'Ajouter à';
    return `${verb} la wishlist`;
  }
}
