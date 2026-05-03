import { Component, inject } from '@angular/core';
import { FilmService } from '../../core/services/film-service';
import { FilmCard } from '../../shared/components/film-card/film-card';
import { AutofocusDirective } from '../../shared/directives/autofocus';

@Component({
  selector: 'app-home',
  imports: [FilmCard, AutofocusDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  filmService = inject(FilmService);
}
