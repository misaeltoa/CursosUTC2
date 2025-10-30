import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-yahir-martinez',
  standalone: true,               // necesario para standalone components
  imports: [RouterModule],         // IMPORTANTE para usar [routerLink]
  templateUrl: './yahir-martinez.component.html',
  styleUrls: ['./yahir-martinez.component.scss']
})
export class YahirMartinezComponent {}
