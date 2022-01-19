import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes : string []= ['Spider-Man','Hulk','Batman','Goku','Gohan']
  heroeBorrado: string =''

  /*
  metodo la estructura es 
   aaaaa(){

  }
  */
  public borrarHeroe(){
    
     this.heroeBorrado =  this.heroes.shift() || '';
  }

  

}
