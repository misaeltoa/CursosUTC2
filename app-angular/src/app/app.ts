import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PerfilAlejandroComponent } from './perfil-alejandro/perfil-alejandro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PerfilAlejandroComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-angular');
}