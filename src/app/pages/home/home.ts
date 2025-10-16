import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare function speak(text: string): void;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent {
  decirHola() {
    if (typeof speak === 'function') {
      speak('Hola, soy Sergio Luis Dávila Tovar');
      return;
    }
    const u = new SpeechSynthesisUtterance('Hola, soy Sergio Luis Dávila Tovar');
    u.lang = 'es-MX';
    speechSynthesis.speak(u);
  }
}
