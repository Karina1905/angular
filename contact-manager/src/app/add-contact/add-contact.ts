import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-contact.html',
  styleUrl: './add-contact.css'
})
export class AddContact {
  name: string = '';
  phone: string = '';

  @Output() contactAdded = new EventEmitter<{name: string; phone: string}>();

  addContact(){
    if(this.name.trim() && this.phone.trim()){
      this.contactAdded.emit({name: this.name, phone: this.phone});
      this.name = '';
      this.phone = '';
    }
  }
}
