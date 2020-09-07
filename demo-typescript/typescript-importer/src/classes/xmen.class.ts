function imprimirConsola( constructorClase: Function) {
    console.log( constructorClase );
}//Para recibir el constructor de la función, o firma de la clase
//Un decorador es algo que se le va a colocar (en este caso decorador de clase) antes de la definición de la clase
@imprimirConsola //<-- Decorador, tenemos que configurar en el tsconfig.json para que lo acepte: "experimentalDecorators": true
//El decorador permite añadir funcionalidades a la clase. Una función que se ejecuta en las clases, expandiendo su funcionalidad
export class Xmen {
    constructor(
        public nombre: string,
        public clave : string
    ){}

    imprimir() {
        console.log(`${ this.nombre } - ${ this.clave}`);
    }
}