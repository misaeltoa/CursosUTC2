import { Component } from '@angular/core';

@Component({
  selector: 'app-saul-fabian',
  standalone: true,
  templateUrl: './saul-fabian.component.html',
  styleUrls: ['./saul-fabian.component.scss']
})
export class SaulFabianComponent {

  drift = false;

  toggleDrift() {
    this.drift = !this.drift;
  }

}
