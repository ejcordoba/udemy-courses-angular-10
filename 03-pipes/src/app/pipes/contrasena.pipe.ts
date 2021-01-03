import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean ): string[] {

    let cadena = value;
    if ( activar ) {
let contrasena = []
      for (let i = 0; i < cadena.length; i++) {
        contrasena[i]= '*'
      console.log(contrasena)     }
   
return contrasena
    } else {

      return value;

    }
    
  }

}
