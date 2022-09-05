import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

 
  borrarElemento(){
    console.log("Borrando...");
    //this.heroes.pop();//Borra el ultimo elmento
    
    //this.heroeBorrado = JSON.stringify(this.heroes.shift());//Borra el primer elmento
    this.heroeBorrado = this.heroes.shift() || '';//Borra el primer elmento
    for(let heroe of this.heroes)
      console.log(heroe);
  }
  

}
