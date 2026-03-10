import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { GameSection } from '../../layouts/game-section';
import { FlixButton } from '../../flix-button/flix-button';
import { GameCard } from '../../game/game-card.component';

interface Game {
  id: number;
  title: string;
  genre: string;
  category: string;
  year: number;
  platform: string;
  rating: number;
  synopsis: string;
  available: boolean;
  image: string;
}

@Component({
  templateUrl: './home.page.html',
  selector: 'app-home',
  styleUrl: './home.css',
  imports: [GameSection, FlixButton, GameCard],
})
export class Home {
  protected readonly onlyAvailable = signal<boolean>(false);
  // Signal principal: source de verite locale de la liste de jeux.
  // https://angular.dev/guide/signals
  protected readonly games = signal<Game[]>([
    {
      id: 1,
      title: 'Cyber Nexus 2077',
      genre: 'RPG',
      category: 'Nouveautes',
      year: 2023,
      platform: 'PC, PS5, Xbox',
      rating: 4.5,
      synopsis: 'Un RPG futuriste dans un monde cyberpunk.',
      available: true,
      image: 'https://via.assets.so/game.png?id=1&q=95&w=300&h=450&fit=cover',
    },
    {
      id: 2,
      title: 'Stellar Odyssey',
      genre: 'Aventure',
      category: 'Nouveautes',
      year: 2023,
      platform: 'PC, PS5',
      rating: 4.8,
      synopsis: 'Une aventure spatiale epique.',
      available: true,
      image: 'https://via.assets.so/game.png?id=2&q=95&w=300&h=450&fit=cover',
    },
    {
      id: 3,
      title: 'Shadow Legends',
      genre: 'Action',
      category: 'Populaires',
      year: 2022,
      platform: 'PC, Xbox',
      rating: 4.2,
      synopsis: 'Combattez les forces des tenebres.',
      image: 'https://via.assets.so/game.png?id=3&q=95&w=300&h=450&fit=cover',
      available: false,
    },
    {
      id: 4,
      title: 'Racing Thunder',
      genre: 'Course',
      category: 'Populaires',
      year: 2022,
      platform: 'PS5, Xbox',
      rating: 4.0,
      synopsis: 'Des courses a couper le souffle.',
      available: true,
      image: 'https://via.assets.so/game.png?id=4&q=95&w=300&h=450&fit=cover',
    },
    {
      id: 5,
      title: 'Fantasy Kingdom',
      genre: 'RPG',
      category: 'Classiques',
      year: 2020,
      platform: 'PC',
      rating: 4.7,
      synopsis: 'Un monde fantastique vous attend.',
      available: true,
      image: 'https://via.assets.so/game.png?id=5&q=95&w=300&h=450&fit=cover',
    },
    {
      id: 6,
      title: 'Zombie Survival',
      genre: 'Horreur',
      category: 'Classiques',
      year: 2021,
      platform: 'PC, PS5, Xbox',
      rating: 3.9,
      synopsis: 'Survivez a l apocalypse zombie.',
      image: 'https://via.assets.so/game.png?id=6&q=95&w=300&h=450&fit=cover',
      available: false,
    },
  ]);

  // computed(): etat derive, recalcule automatiquement selon les dependances lues.
  // https://angular.dev/guide/signals
  protected favoriteGameIds = signal<number[]>([]);

  protected readonly visibleGames = computed(() => {
    if (!this.onlyAvailable()) return this.games();
    return this.games().filter((game) => game.available);
  });
  nomApplication: any;

  protected toggleFavorite(gameId: number): void {
    this.favoriteGameIds.update((gameIds) => {
      let newGameIds: Array<number> = gameIds;

      if (!newGameIds.includes(gameId)) {
        newGameIds.push(gameId);
      } else {
        newGameIds = gameIds.filter((oldGameId) => oldGameId !== gameId);
      }

      console.log(newGameIds);
      return newGameIds;
    });
  }

  protected filterByAvailibility(): void {
    // update imutable sur notre signal
    // this.onlyAvailable = !this.onlyAvailable;
    this.onlyAvailable.update((available) => !available);
  }
  // protected filterAvailibilityLabel(): string {
  //   if (this.onlyAvailable()) {
  //     return 'voir tous les jeux';
  //   }
  //   return 'voir jeux disponibles';
  // }
  protected isFavorite(gameId: number): boolean {
    return this.favoriteGameIds().includes(gameId);
  }

  protected filterAvailibilityLabel = computed((): string => {
    return this.onlyAvailable() ? 'voir tous les jeux' : 'voir jeux disponibles';
  });
}
