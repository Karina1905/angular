import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import { RouterLink, RouterLinkActive } from '@angular/router'; 

interface Department {
  id: number;
  name: string;
  
}

interface Employee {
  id: number;
  name: string;
  position: string;
  departmentId: number;
}

@Component({
  selector: 'app-departaments',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './departaments.html',
  styleUrl: './departaments.css'
})
export class Departaments {
  name='';

constructor(){
   if (!localStorage.getItem('departments')) {
      const defaultDepartments = [
        { id: 1, name: 'IT' },
        { id: 2, name: 'HR' },
        { id: 3, name: 'Sales' }
      ];
      localStorage.setItem('departments', JSON.stringify(defaultDepartments));
    }

  }

   get departments(): Department[] {
    const saved = localStorage.getItem('departments');
    return saved ? JSON.parse(saved) : [];}

  addDepartment(){
    if(!this.name.trim()) return
    
const newDepartment: Department = {
  id:Date.now(),
  name:this.name
}
    const currentDepartments = this.departments;
    currentDepartments.push(newDepartment);
    localStorage.setItem('departments', JSON.stringify(currentDepartments));
    this.name = '';
  }

  deleteDepartment(id: number){
    const employees: Employee[] = JSON.parse(localStorage.getItem('employees') ?? '[]')
    const used = employees.some((emp) => emp.departmentId === id)
    if(used){
      alert("неможливо видалити департамент, є працівники")
      return
    }
    const currentDepartments = this.departments.filter((dep) => dep.id !== id);
    localStorage.setItem('departments', JSON.stringify(currentDepartments));
  }


  trackById(_:number, d: Department){
    return d.id;
  }

  getEmployeeCount(departmentId: number): number{
    const employees: Employee[] = JSON.parse(localStorage.getItem('employees') || '[]')
    return employees.filter((e) => e.departmentId === departmentId).length

  }
  
}
