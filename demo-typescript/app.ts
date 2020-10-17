(()=>{

  // Uso de Let y Const
  const nombre = 'Ricardo Tapia';
  const edad = 23;

  /* const PERSONAJE = {
    nombre: nombre,
    edad: edad
  };Si una propiedad tiene el mismo valor que una variable (nombre:nombre), como este caso, se puede definir como a continuación*/
  const PERSONAJE = { nombre, edad };


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface Batman  {
    nombre: string;
    artesMarciales: string[];
  }

  const batman: Batman = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }
  

  // Convertir esta funcion a una funcion de flecha
  /* function resultadoDoble( a, b ){
    return (a + b) * 2
  } */
  const resultadoDoble = ( a: number, b: number):number => {
    return (a + b) *2
  } 


  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger( nombre:string, poder?:string, arma:string = 'arco' ){
    let mensaje;
    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + poder
    }
  };

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.
class Rectangulo {
  constructor ( public base:number, 
                public altura:number ){}

  calcularArea = ():number => this.base * this.altura;

}
})();