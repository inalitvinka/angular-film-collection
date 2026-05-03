import { Injectable, computed, signal } from '@angular/core';
import data from '../data/films.json';

@Injectable({
  providedIn: 'root',
})

export class FilmService {
  private films = signal(data);

  search = signal('');

  filteredFilms = computed(() => {
    return this.films().filter((film) =>
      film.title
        .toLowerCase()
        .includes(this.search().toLowerCase())
    );
  });

  toggleFavorite(id: number) {
    this.films.update((films) =>
      films.map((film) =>
        film.id === id
          ? { ...film, isFavorite: !film.isFavorite }
          : film
      )
    );
  }

  getFilmById(id: number) {
    return this.films().find((film) => film.id === id);
  }

  favoriteFilms = computed(() =>
    this.films().filter((film) => film.isFavorite)
  );
}
