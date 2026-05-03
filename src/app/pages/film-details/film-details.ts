import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
} from '@angular/router';

import { FilmService } from '../../core/services/film-service';
import { DurationPipe } from '../../shared/pipes/duration-pipe';
import { Film } from '../../core/models/film.model';

@Component({
  selector: 'app-film-details',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.css',
})

export class FilmDetails implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  filmService = inject(FilmService);

  filmId = Number(this.route.snapshot.paramMap.get('id') ?? 0);

  film: Film | undefined;

  ngOnInit() {
    const film = this.filmService.getFilmById(this.filmId);

    if (!film) {
      this.router.navigate(['/not-found']);
      return;
    }

    this.film = film;
  }
}
