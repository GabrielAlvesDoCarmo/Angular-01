import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOneComponent } from '../card-one/card-one.component';
import { CardPurpleComponent } from '../card-purple/card-purple.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';



@NgModule({
  declarations: [
    CardOneComponent,
    CardPurpleComponent,
    CardButtonComponent,
    CardRoxoButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardOneComponent,
    CardPurpleComponent,
    // CardButtonComponent,
    // CardRoxoButtonComponent
  ]
})
export class CardsModule { }
