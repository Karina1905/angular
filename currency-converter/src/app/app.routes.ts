import { Routes } from '@angular/router';
import { ConverterComponent } from './components/converter/converter';
import { AboutComponent } from './components/about/about';
import { HistoryComponent } from './components/history/history';

export const routes: Routes = [
  { path: '', redirectTo: 'converter', pathMatch: 'full' },
  { path: 'converter', component: ConverterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: '**', redirectTo: 'converter' }
];
