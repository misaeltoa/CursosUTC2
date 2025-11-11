import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SergioLuisComponent } from './pages/sergio-luis/sergio-luis.component';
import { JonathanAlexisComponent } from './pages/jonathan-alexis/jonathan-alexis.component';
import { YahirMartinezComponent } from './pages/yahir-martinez/yahir-martinez.component';
import { YahirAlejandroComponent } from './pages/yahir-alejandro/yahir-alejandro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'sergio-luis', component: SergioLuisComponent },
  { path: 'jonathan-alexis', component: JonathanAlexisComponent },
  { path: 'yahir-martinez', component: YahirMartinezComponent },
  { path: 'yahir-alejandro', component: YahirAlejandroComponent },
  { path: '**', redirectTo: 'index' }
];