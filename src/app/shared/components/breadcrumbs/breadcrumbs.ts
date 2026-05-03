import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FilmService } from '../../../core/services/film-service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  router = inject(Router);
  filmService = inject(FilmService);

  get currentUrl() {
    return this.router.url;
  }

  get filmTitle() {
    if (!this.currentUrl.startsWith('/film/')) return '';

    const id = Number(this.currentUrl.split('/')[2]);

    return this.filmService.getFilmById(id)?.title ?? '';
  }
}
