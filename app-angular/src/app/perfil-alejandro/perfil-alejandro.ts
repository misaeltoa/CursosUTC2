import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-alejandro',
  standalone: true,
  imports: [],
  templateUrl: './perfil-alejandro.html',
  styleUrl: './perfil-alejandro.scss'
})
export class PerfilAlejandroComponent {

  // 1. CREAMOS EL ARRAY CON LOS DATOS CURIOSOS
  //    Esto es igual que en tu JavaScript original. Lo ponemos como una propiedad de la clase.
  private funFacts: string[] = [
    "Me gusta mucho el Pozole.",
    "Disfruto programar.",
    "Mi videojuego favorito es Lies of P",
    "En mi tiempo libre aprendo a tocar guitarra."
  ];

  // 2. CREAMOS UNA PROPIEDAD PARA GUARDAR EL DATO ACTUAL
  //    Esta variable estará "conectada" al HTML.
  //    La inicializamos con el primer dato del array.
  public currentFact: string = this.funFacts[0];

  // 3. CREAMOS LA FUNCIÓN QUE CAMBIARÁ EL DATO
  //    Esta es la lógica que tenías, pero convertida en un "método" de la clase.
  public changeFact(): void {
    let newFact: string;

    // Bucle para asegurar que el nuevo dato no sea igual al actual
    do {
      const randomIndex = Math.floor(Math.random() * this.funFacts.length);
      newFact = this.funFacts[randomIndex];
    } while (newFact === this.currentFact);

    // Actualizamos la variable con el nuevo dato
    this.currentFact = newFact;
  }
}