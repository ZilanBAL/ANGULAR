import { Routes } from '@angular/router';
import { Home } from '../pages/home/home.component';
import { NotFound } from '../pages/not_found/not-found.component';
import { GameDetail } from '../pages/game-detail/game-detail.component';

// TODO (Seance 4 - routing): declarer ici les routes lazy-loaded vers
// Accueil, DetailFilm, Favoris et NotFound.
// Voir docs/seance-4.md
export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'WishFlix - Acceuil',
  },
  {
    path: 'game/:id', // le : idique que ce qu'il suit est un paramètre
    component: GameDetail,
    title: 'WishFlix - Fiche de jeu',
  },
  {
    path: '**',
    component: NotFound,
    title: '404 - Tu es perdu ?',
  },
];
