import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Employees} from './pages/employees/employees';
import { EmployeeDetails } from './pages/employee-details/employee-details';
import { Departaments } from './pages/departaments/departaments';
export const routes: Routes = [
    {path: '', component: Home}, 
    {path: 'departaments', component: Departaments},
    {path:'employees', component: Employees},
{path:'employee/:id', component: EmployeeDetails}];
