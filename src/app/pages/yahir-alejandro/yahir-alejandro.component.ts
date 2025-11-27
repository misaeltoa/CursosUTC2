import { Component } from '@angular/core';

//Componente
@Component({
  selector: 'app-yahir-alejandro',
  standalone: true,
  imports: [],
  templateUrl: './yahir-alejandro.component.html',
  styleUrl: './yahir-alejandro.component.scss'
})
export class YahirAlejandroComponent {

  //Datos míos
  private funFacts: string[] = [
    "Me gusta mucho el Pozole.",
    "Disfruto programar.",
    "Mi videojuego favorito es Lies of P",
    "En mi tiempo libre toco guitarra."
  ];

  public currentFact: string = this.funFacts[0];

  public changeFact(): void {
    let newFact: string;

    do {
      const randomIndex = Math.floor(Math.random() * this.funFacts.length);
      newFact = this.funFacts[randomIndex];
    } while (newFact === this.currentFact);

    this.currentFact = newFact;
  }
}