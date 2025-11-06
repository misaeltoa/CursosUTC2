import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  integrantes = [
    { nombre: 'Sergio Luis Dávila Tovar', ruta: '/sergio-luis', color: '#ffd166' },
    { nombre: 'Jonathan Alexis', ruta: '/jonathan-alexis', color: '#06d6a0' },
    { nombre: 'Yahir Martínez', ruta: '/yahir-martinez', color: '#118ab2' },
  ];
}
