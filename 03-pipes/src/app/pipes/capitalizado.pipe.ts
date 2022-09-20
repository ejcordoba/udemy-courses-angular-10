import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
    
    value = value.toLocaleLowerCase(); // Pasamos todo el string a minúscula

    let nombres = value.split(' '); // definimos un array y en él guardamos las palabras que componen el string, usando los espacios en blanco como separador

    if ( todas ) { // Si todas == true
      nombres = nombres.map( nombre => { // Usamos la función map para definir una función por cada uno de los elementos del array 'nombres'
        return nombre[0].toUpperCase() + nombre.substr(1); // Pasamos el primer caracter(posicion) de cada uno de los elementos del array (nombres[0]) a mayúscula, y le concatenamos el resto del array desde la posición 1 (subtr(1))
      });
    } else { // Si todas == false solamente al primer elemento del array le pasamos a mayúscula su primer caracter(posición) (nombres[0][0]) y concatenamos el resto desde la posición 1 (nombres[0].substr(1))
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(' '); // Devolvemos como string el array usando como unión un espacio en blanco

  }

}
