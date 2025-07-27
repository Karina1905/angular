import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

interface Employee {
  id: number;
  name: string;
  position: string;
  departmentId: number;
}

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-details.html',
  styleUrls: ['./employee-details.css']
})
export class EmployeeDetails {
  employee?: Employee;
  departmentName = '';

  private departments = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Sales' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    const employees: Employee[] = JSON.parse(localStorage.getItem('employees') || '[]');

    this.employee = employees.find(e => e.id === id);

    if (this.employee) {
      const dept = this.departments.find(d => d.id === this.employee!.departmentId);
      this.departmentName = dept ? dept.name : '';
    }
  }

  goBack() {
    this.router.navigate(['/employees']);
  }
}
