import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { YahirMartinezComponent } from './pages/yahir-martinez/yahir-martinez.component';
import { SaulFabianComponent } from './pages/saul-fabian/saul-fabian.component';
import { JonathanAlexisComponent } from './pages/jonathan-alexis/jonathan-alexis.component';
import { SergioLuisComponent } from './pages/sergio-luis/sergio-luis.component';
import { YahirAlejandroComponent } from './pages/yahir-alejandro/yahir-alejandro.component';
import { CandidoMisaelComponent } from './pages/candido-misael/candido-misael.component';

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'yahir-martinez', component: YahirMartinezComponent },
  { path: 'saul-fabian', component: SaulFabianComponent },
  { path: 'jonathan-alexis', component: JonathanAlexisComponent },
  { path: 'sergio-luis', component: SergioLuisComponent },
  { path: 'yahir-alejandro', component: YahirAlejandroComponent },
  { path: 'candido-misael', component: CandidoMisaelComponent },
];
