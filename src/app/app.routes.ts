import { Routes } from '@angular/router';
// Importa el index Y a tus compañeros de 'main'
import { IndexComponent } from './pages/index/index.component';
import { SergioLuisComponent } from './pages/sergio-luis/sergio-luis.component';
import { JonathanAlexisComponent } from './pages/jonathan-alexis/jonathan-alexis.component';
import { YahirMartinezComponent } from './pages/yahir-martinez/yahir-martinez.component';

// ¡AÑADES EL TUYO!
import { YahirAlejandroComponent } from './pages/yahir-alejandro/yahir-alejandro.component';
// (Faltarían Saúl y Misael, pero los pueden añadir después)

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'sergio-luis', component: SergioLuisComponent },
  { path: 'jonathan-alexis', component: JonathanAlexisComponent },
  { path: 'yahir-martinez', component: YahirMartinezComponent },

  // ¡AÑADES TU RUTA!
  { path: 'yahir-alejandro', component: YahirAlejandroComponent },

  { path: '**', redirectTo: 'index' } // Ruta por defecto
];