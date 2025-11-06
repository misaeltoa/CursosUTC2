import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { YahirAlejandroComponent } from './pages/yahir-alejandro/yahir-alejandro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, YahirAlejandroComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-angular');
}
