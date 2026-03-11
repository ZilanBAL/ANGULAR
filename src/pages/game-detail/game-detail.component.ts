import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GameCatalog } from '../../features/game/game-catalog';
import { toSignal } from '@angular/core/rxjs-interop';
import { Game } from '../../features/game/game.model';
import { FlixButton } from '../../flix-button/flix-button';

@Component({
  selector: 'game-detail',
  imports: [FlixButton, RouterLink],
  templateUrl: './game-detail.page.html',
  styleUrl: './game-detail.css',
})
export class GameDetail {
  protected readonly route = inject(ActivatedRoute);
  protected readonly gameCatalog = inject(GameCatalog);

  // gameId: number: extrait l'id du jeu depuis les parametres de l'URL.
  // parseInt: convertit la valeur de l'id en nombre entier.
  // ?? '': operateur de coalescence nulle pour fournir une valeur par defaut si l'id est absent ou invalide.
  // Cette approche garantit que gameId est toujours un nombre, ce qui facilite les operations suivantes pour recuperer les details du jeu.
  private readonly gameId = parseInt(this.route.snapshot.paramMap.get('id') ?? '');

  // game: signal<Game | undefined>: stocke les details du jeu a afficher, ou undefined si l'id est invalide.
  // computed(): derive la valeur du jeu a partir de gameId en interrogeant le catalogue.
  // Angular met en cache le resultat et ne recalcule que si gameId change, ce qui optimise les performances.
  // Dans WishFlix, cette structure permet d'afficher une fiche de jeu detaillee sans duplication de donnees ni logique complexe dans le template.
  // Pour aller plus loin: https://angular.dev/guide/signals
  protected game = computed<Game | undefined>(() => this.gameCatalog.getGameSheet(this.gameId));
}
