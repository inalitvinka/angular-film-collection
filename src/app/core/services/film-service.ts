import { Injectable, computed, signal } from '@angular/core';
import data from '../data/films.json';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root',
})

export class FilmService {
  private films = signal<Film[]>(data);

  public readonly allFilms = this.films.asReadonly();

  search = signal('');

  filteredFilms = computed(() => {
    return this.allFilms().filter((film) =>
      film.title
        .toLowerCase()
        .includes(this.search().toLowerCase())
    );
  });

  toggleFavorite(id: number): void {
    this.films.update((films) =>
      films.map((film) =>
        film.id === id
          ? { ...film, isFavorite: !film.isFavorite }
          : film
      )
    );
  }

  getFilmById(id: number): Film | undefined {
    return this.films().find((film) => film.id === id);
  }

  favoriteFilms = computed<Film[]>(() =>
    this.films().filter((film) => film.isFavorite)
  );
}
