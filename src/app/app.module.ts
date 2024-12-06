import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardOneComponent } from './card-one/card-one.component';
import { CardPurpleComponent } from './card-purple/card-purple.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOneComponent,
    CardPurpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
