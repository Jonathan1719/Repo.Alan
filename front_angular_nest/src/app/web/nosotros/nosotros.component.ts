import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  template: `
    <h1>
      Nosotros
    </h1>
    <p>
      nosotros works!
    </p>
  `,
  styles: `
  h1{
    color: red;
  }
  `
})
export class NosotrosComponent {
  public titulo: string = 'Nosotros';

}
