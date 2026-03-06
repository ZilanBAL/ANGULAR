import { Component, input } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

@Component({
  selector: 'game-section',
  // imports: [ɵEmptyOutletComponent],
  templateUrl: './game-section.html',
  styleUrl: './game-section.css',
})
export class GameSection {
  title = input.required<string>();
  subtitle = input<string>();
  //transformer tous les boutons de filtrage en un composant de filtrage reutilisable
}
