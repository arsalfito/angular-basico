import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  //En esta seccion se declaran los componentes que se van a autilizar en la aplicacion
  declarations: [
    AppComponent
  ],
  //En esta seccion se declaran los modulos que se van a autilizar en la aplicaciòn.
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
