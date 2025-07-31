import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-toggle-theme',
   standalone: true,  
  imports: [CommonModule],
  template: ` <button class="btn btn-secondary" (click)="toggleTheme()">Тема</button>`,
  styleUrl: './toggle-theme.css'
})
export class ToggleTheme {

  toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-bs-theme');
    html.setAttribute('data-bs-theme', currentTheme === 'dark' ? 'light' : 'dark');
  }
}
