import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-theme',
  imports: [CommonModule],
  templateUrl: './toggle-theme.html',
  styleUrl: './toggle-theme.css'
})
export class ToggleTheme {
  isDark = false;

  toggleTheme(){
    this.isDark = !this.isDark;

    const body = document.body;
    if (this.isDark){
      body.classList.add('dark-theme');
    }else{
      body.classList.remove('dark-theme')
    }
  }
}
