import { Component, EventEmitter, Output,Input  } from '@angular/core';
import {CommonModule} from '@angular/common'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList {
@Input() contacts: {name:string; phone: string}[]=[];
@Output() deleteContact = new EventEmitter<number>();

search = ''

get filteredContacts(){
  return this.contacts.filter(c =>
    c.name.toLocaleLowerCase().includes(this.search.toLowerCase())
  )
}

handleDelete(index: number){
  this.deleteContact.emit(index);
}

}
