import { Component } from '@angular/core';

@Component({
  selector: 'app-sergio-luis',
  standalone: true,
  templateUrl: './sergio-luis.component.html',
  styleUrls: ['./sergio-luis.component.scss']
})
export class SergioLuisComponent {
  currentYear = new Date().getFullYear();
}
