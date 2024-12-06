import { Component } from '@angular/core';

@Component({
  selector: 'app-card-one',
  standalone: false,
  
  templateUrl: './card-one.component.html',
  styleUrl: './card-one.component.scss'
})
export class CardOneComponent {
  plano = {
    infos: {
      type: "Simples",
      price: 1000
    }
  } 

  type = "Simples";
  price = 1000;

  getFullPrice(){
    setTimeout(() => {
      console.log("Set Timeout");
      this.type = "TESTE PORRA";
      this.price += 1000;
    }, 4000);

    return "R$ " + this.price + ",00/Mês";
  }
}
