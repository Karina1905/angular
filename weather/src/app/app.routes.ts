import { Routes } from '@angular/router';
import {Weather} from './weather/weather';
import {History} from './history/history';

export const routes: Routes = [
    {path: '', component: Weather},
    {path: 'history', component: History},
    {path:'**', redirectTo: ''}
];
