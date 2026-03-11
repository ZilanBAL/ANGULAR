import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // NgOptimizedImage: optimisation de chargement des images via ngSrc dans le template.
  // https://angular.dev/guide/image-optimization
  imports: [RouterOutlet],
  templateUrl: './app.template.html',
})
export class App {
  // elles permettent de stocker l'état local (ex: liste de jeux) et de définir la logique métier (ex: filtrage des jeux).
  // readonly: les propriétés ne peuvent pas être réassignées après l'initialisation.
  // nomApplication: simple propriété de texte pour le titre de l'application.
  // onlyAvailable: signal boolean pour gérer l'état du filtre de disponibilité des jeux.
  protected readonly nomApplication = 'WishFlix';
}
