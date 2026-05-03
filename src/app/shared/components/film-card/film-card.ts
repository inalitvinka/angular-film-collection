import { Component, input, output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../../../core/models/film.model'

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.css',
})
export class FilmCard {
  film = input.required<Film>();

  favoriteToggle = output<number>();

  router = inject(Router);

  onFavoriteClick(event: Event) {
    event.stopPropagation();

    this.favoriteToggle.emit(this.film().id);
  }

  goToDetails() {
    this.router.navigate(['/film', this.film().id]);
  }
}
