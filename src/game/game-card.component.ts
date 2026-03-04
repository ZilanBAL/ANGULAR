import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Game } from './game.model';

@Component({
  imports: [NgOptimizedImage],
  selector: 'game-card',
  templateUrl: './game-card.template.html',
})
export class GameCard {
  // Input property: permet de recevoir des données depuis le parent (App) pour afficher les details d'un jeu.
  // required<Game>: indique que cette propriété est obligatoire et doit être de type Game.
  game = input.required<Game>();
}
