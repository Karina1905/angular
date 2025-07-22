import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import { ToggleTheme } from './toggle-theme/toggle-theme';
import { ContactList } from './contact-list/contact-list';
import { AddContact } from './add-contact/add-contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactList, ToggleTheme, AddContact, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  contacts = signal<{name:string; phone: string}[]>([])

  handleAdd(contact: {name: string; phone: string} ){
    this.contacts.update((prev)=>[...prev, contact]);
  }

  handleDelete(index: number){
    const current = this.contacts();
    const updated = [...current.slice(0, index), ...current.slice(index+1)]
    this.contacts.set(updated);
  }
}
