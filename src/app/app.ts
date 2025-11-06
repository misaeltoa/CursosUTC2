import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

<<<<<<< HEAD
import { YahirAlejandroComponent } from './pages/yahir-alejandro/yahir-alejandro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, YahirAlejandroComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
=======
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'], // <-- corregido
>>>>>>> 76caefd62f2593b1dd68d9b66b32ca640fcd645d
})
export class App {
  protected readonly title = signal('app-angular');
}
