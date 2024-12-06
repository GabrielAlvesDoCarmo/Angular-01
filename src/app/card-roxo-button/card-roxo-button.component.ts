import { Component } from '@angular/core';

@Component({
  selector: 'app-card-roxo-button',
  standalone: false,
  // templateUrl: './card-roxo-button.component.html',
  template: `<div class="card-roxo-button">Adiquirir</div>`,
  // styleUrl: './card-roxo-button.component.scss'
  styles: [
    `
      .card-roxo-button {
        font-size: 16px;
        text-align: center;
        margin-top: 10px;
        border-radius: 25px;
        background-color: rgb(203, 165, 255);
        cursor: pointer;
        font-weight: bold;
        padding: 10px;
      }
    `
  ]
})
export class CardRoxoButtonComponent {

}
