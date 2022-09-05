import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //En esta seccion se declaran los componentes que hacen parte del modulo.
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //En esta seccion se declaran los componentes que van a ser publicos del modulo y 
    //que van a ser accedidos desde la aplicaciòn.
    exports:[
        ListadoComponent
    ],
    //Ofrece directivas personalizadas de angular como el ngif y el ngfor (CommonModule)
    imports:[
        CommonModule
    ]
})
export class HeroesModule{

}