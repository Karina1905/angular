import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <h2>Історія пошуку</h2>
      <p *ngIf="history.length == 0">Немає історії</p>
      <ul *ngIf="history.length > 0" class="list-group">
        <li *ngFor="let city of history" class='list-group-item'>{{city}}</li>
      </ul>
      <button class='btn btn-primary mt-3' routerLink='/'>Назад до пошуку</button>
      <button class='btn btn-danger mt-3' (click)='clearHist()'>Очистити історію пошуку</button>
    </div>
  `
})
export class History {
  history: string[] = [];
  constructor(){
    this.history = JSON.parse(localStorage.getItem('searchHistory') || '[]')
  }

  clearHist(){
    localStorage.clear()
    this.history = [];
  }
  
}
