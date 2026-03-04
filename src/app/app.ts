import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { GameCard } from '../game/game-card.component';
import { Game } from '../game/game.model';

@Component({
  selector: 'app-root',
  // NgOptimizedImage: optimisation de chargement des images via ngSrc dans le template.
  // https://angular.dev/guide/image-optimization
  imports: [GameCard],
  templateUrl: './app.template.html',
  styleUrls: ['./app.css'],
})
export class App {
  // elles permettent de stocker l'état local (ex: liste de jeux) et de définir la logique métier (ex: filtrage des jeux).
  // readonly: les propriétés ne peuvent pas être réassignées après l'initialisation.
  // nomApplication: simple propriété de texte pour le titre de l'application.
  // onlyAvailable: signal boolean pour gérer l'état du filtre de disponibilité des jeux.
  protected readonly nomApplication = 'WishFlix';
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
  protected readonly visibleGames = computed(() => {
    if (!this.onlyAvailable()) return this.games(); // si le filtre n est pas actif, on retourne tous les jeux
    return this.games().filter((game) => game.available);
  });

  protected filterByAvailability(): void {
    //update
    // utiliser update() pour mettre à jour notre donnée
    this.onlyAvailable.update((available) => !available);
  }
  // transformer le if else d'affichage du bouton en une fonction qui retourne le texte du bouton selon l'état du filtre.
  protected filterAvailibilityLabel = computed((): string => {
    if (this.onlyAvailable()) return 'Voir tous les jeux';
    return 'Voir les jeux disponibles';
  });
}
