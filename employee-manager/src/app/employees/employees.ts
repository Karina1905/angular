import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees {
  employees = [
  { name: 'Іван', position: 'Менеджер', salary: 15000 },
  { name: 'Марія', position: 'Дизайнер', salary: 12000 },
  { name: 'Петро', position: 'Розробник', salary: 20000 }
];

newName = '';
newPosition = '';
newSalary: number | null = null;

search = '';
selectedEmployee: any = null;

addEmployee(){
  if(this.newName && this.newPosition && this.newSalary !== null){
    this.employees.push({
      name: this.newName,
      position: this.newPosition,
      salary: this.newSalary,
    })
    this.newName = ''
    this.newPosition = ''
    this.newSalary = null;
  }
}

get totalSum(){
  return this.employees.reduce((sum, emp) => sum + emp.salary, 0)
}

get filteredEmployee(){
  return this.employees.filter((emp)=> emp.name.toLowerCase().includes(this.search.toLowerCase()))
}

openDetails(emp: any){
  this.selectedEmployee = emp;
}

closeDetails(){
  this.selectedEmployee = null;
}
};

