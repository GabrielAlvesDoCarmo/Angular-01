import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: false,
  // templateUrl: './card-button.component.html',
  template: `
    <div class="card-button">Adiquirir</div>
  `,
  // styleUrl: './card-button.component.scss'
  styles: [
    `
      .card-button {
        font-size: 16px;
        text-align: center;
        margin-top: 10px;
        border-radius: 25px;
        background-color: white;
        cursor: pointer;
        font-weight: bold;
        padding: 10px;
      }
    `
  ]
})
export class CardButtonComponent {

}
