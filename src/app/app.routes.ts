import { Routes } from '@angular/router';

// 1. Importa SOLAMENTE tu componente, que sí existe
import { YahirAlejandroComponent } from './pages/yahir-alejandro/yahir-alejandro.component';

export const routes: Routes = [
  // 2. Haz que tu componente sea la ruta por defecto
  { path: 'yahir-alejandro', component: YahirAlejandroComponent },

  // 3. Haz que la página de inicio (ruta vacía) te redirija a tu componente
  { path: '', redirectTo: 'yahir-alejandro', pathMatch: 'full' }
];