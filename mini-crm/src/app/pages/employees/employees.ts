import { Component } from '@angular/core';
import {NgIf, NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

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
  selector: 'app-employees',
  standalone:true,
  imports: [NgIf, NgForOf, FormsModule, RouterLink],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees {
  employees: Employee[]=[]
  name='';
  position='';
  departmentId = this.departments[0].id;

  searchItem = '';
  sortBy: keyof Employee = 'name';
  sortAsc = true;

  constructor(){
    const saved = localStorage.getItem('employees');
    if(saved){
      this.employees = JSON.parse(saved)
    }
  }

  get departments(): Department[] {
    const defaultDepartments = [
      { id: 1, name: 'IT' },
      { id: 2, name: 'HR' },
      { id: 3, name: 'Sales' }
    ];
    
    const saved = localStorage.getItem('departments');
    return saved ? JSON.parse(saved) : defaultDepartments;
  }

  addEmployee(){
    if(!this.name.trim() || !this.position.trim()) return;

    const newEmployee: Employee = {
      id: Date.now(),
      name: this.name,
      position: this.position,
      departmentId: +this.departmentId
    }
    this.employees.push(newEmployee);
    this.save();

    this.name = '';
    this.position = '';
    this.departmentId = this.departments[0].id
  }

  deleteEmployee(id:number){
    this.employees = this.employees.filter((e)=> e.id != id);
    this.save()
  }

  save(){
    localStorage.setItem('employees', JSON.stringify(this.employees))
  }

  get filteredAndSortEmployees(){
    let filtered = this.employees.filter(e => 
      e.name.toLowerCase().includes(this.searchItem.toLowerCase()) ||
      e.position.toLowerCase().includes(this.searchItem.toLowerCase())
    )
    filtered.sort((a: Employee, b: Employee) => {
      const aValue = a[this.sortBy].toString().toLowerCase();
      const bValue = b[this.sortBy].toString().toLowerCase();
      if(aValue < bValue) return this.sortAsc ? -1 : 1
      if(aValue > bValue) return this.sortAsc ? 1 : -1
      return 0
    })
    return filtered
  }

  toggleSort(field: keyof Employee){
    if(this.sortBy == field){
      this.sortAsc = !this.sortAsc
    }else {
      this.sortBy = field;
      this.sortAsc = true;
    }
  }

  getDepartmentName(deptId: number){
    const dept = this.departments.find(d => d.id == deptId);
    return dept ? dept.name : ''
  }
}
