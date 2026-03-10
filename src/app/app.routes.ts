import { Routes } from '@angular/router';
import { Home } from '../pages/home/home.component';

// TODO (Seance 4 - routing): declarer ici les routes lazy-loaded vers
// Accueil, DetailFilm, Favoris et NotFound.
// Voir docs/seance-4.md
export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'WishFlix - Acceuil',
  },
];
