import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ToggleTheme } from './toggle-theme/toggle-theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ToggleTheme],
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <a class='navbar-brand'>Weather</a>
      <button class="btn btn-primary me-2" routerLink=''>Пошук Погоди</button>
      <button class="btn btn-primary me-2" routerLink='history'>Історія пошуку</button>
       <app-toggle-theme></app-toggle-theme>

    </nav>
    <router-outlet></router-outlet>
  `
})

export class App {
}

