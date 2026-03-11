import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { GameSection } from '../../layouts/game-section';
import { FlixButton } from '../../flix-button/flix-button';
import { GameCard } from '../../features/game/game-card.component';
import { GameCatalog } from '../../features/game/game-catalog';

@Component({
  templateUrl: './home.page.html',
  selector: 'app-home',
  styleUrl: './home.css',
  imports: [GameSection, FlixButton, GameCard],
})
export class Home {
  // @Inject(GameCatalog)
  // private readonly catalog;

  protected readonly gameCatalog = inject(GameCatalog);

  protected filterAvailibilityLabel = computed((): string => {
    return this.gameCatalog.onlyAvailable() ? 'voir tous les jeux' : 'voir jeux disponibles';
  });
}
