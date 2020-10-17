# angular-10

# Curso de Udemy Angular: De cero a experto (Angular 10+)

Udemy Angular course: From zero to expert (Angular 10+)

## Índice del curso

* Sección 1:Introducción al curso de Angular
* 1.5: Instalaciones y configuaraciones mínimas necesarias.
* Sección 2:Gentil introducción a TypeScript y ES6
* 2.10: Demostración de TypeScript
* 2.11: Configuración de TypeScript
* 2.12: Variables let y const
* 2.13. Introducción a los tipos de datos
* 2.14. Excluir archivos a traducir
* 2.15. Template literales del ES6
* 2.16. Funciones: Parámetros opcionales, obligatorios y por defecto
* 2.17. Funciones de Flecha
* 2.18. Desestructuración de Objetos y Arreglos (arrays)
* 2.




Enlace [de prueba](#10-Demostracion-de-TypeScript)

# Sección 1:Introducción al curso de Angular

## 5. Instalaciones y configuraciones mínimas necesarias.

**Instalaciones necesarias para el curso**

1. NodeJS: https://nodejs.org/es/
2. Google Chrome:
https://www.google.es/chrome/browser/desktop/
3. TypeScript:
http://www.typescriptlang.org/
4. Angular CLI
https://cli.angular.io/
https://github.com/angular/angular-cli
5. Ionic
http://ionicframework.com/getting-started/

**Editores de Texto:**

Atom
https://atom.io/

Visual Studio Code
https://code.visualstudio.com/

**Plugins recomendados para los siguientes editores:**

**ATOM**

* Angular 2 Type Script Snippets
* Atom Bootstrap3
* Atom Typescript
* File Icons
* Platformio Ide Terminal
* V Bootstrap4

**Visual Studio Code**

* Angular 2 TypeScript Emmet
* Angular 5 Snippets – TypeScript, Html, Angular Material...
* Angular Language Service
* Angular v5 Snippets
* Angular2-inline
* Bootstrap 4 & Font Awesome snippets
* HTML CSS Support
* JavaScript (ES6) code snippets
* JS-CSS-HTML Formatter
* JSHint
* Material Icon Theme
* Prettier – Code Formatter
* Terminal
* TSLint
* TypeScript Hero
* TypeScript Importer

# Sección 2:Gentil introducción a TypeScript y ES6

## 10. Demostración de TypeScript

Explicación de cómo es un lenguaje tipado, para empezar renombramos el archivo app.js a app.ts

Ahora nos muestra errores, la función saludar requería un argumento, que ahora le podemos pasar.

Cuando definimos el argumento a pasar en la función como tipo string y le pasamos el atributo de tipo string del objeto constante nos da un error:

>Uncaught SyntaxError: Unexpected token ':'

Esto es porque el navegador no soporta cargar directamente un archivo tipo .ts que es lo que le estamos indicando en el &lt;script> del html

Para compilar el archivo ts en un archivo js *tsc: typescript compiler* : 

>tsc --version

>Version 3.7.5

>tsc app.ts

## 11. Configuración de TypeScript

Crear un archivo de configuración:

>tsc --init

Esto genera un archivo tsconfig.json

>tsc -w 

Esto hace que entre en modo observador, pendiente de recompilar cuando haya cambios en el archivo ts

## 12. Variables let y const

Dentro de un scope (entre llaves), cuando las variables se declaran con *let* tienen validez dentro de ese scope, cuando se declaran dos variables *let* con el mismo nombre, al compilarlas a js se renombran, de tal manera que no hay conflicto.

Por otro lado, se puede declarar un valor como constante, *const*, pero entonces no se le podrá asignar otro valor, la convención es declarar los nombres todos en mayúsculas.

## 13. Introducción a los tipos de datos

>let mensaje: string = "Hola";

>let numero: number = 123;

>let booleano: boolean = true;

>let hoy: Date = new Date();

>let cualquiercosa;

>//let cualquiercosa: string | number; <-- asignar varios tipos a una misma variable con un pipe

>cualquiercosa = mensaje;

>cualquiercosa = numero;

>cualquiercosa = booleano;

>cualquiercosa = hoy;

```
let spiderman = {
    nombre: 'Peter',
    edad: 30
};
spiderman = {
    nombre: 'Juan',
    edad: 40
};
```
## 14. Excluir archivos a traducir

Exclusión de archivos a traducir de TS a JS

Creamos un nuevo directorio "typescript" y hacemos una copia del archivo app.ts, renombramos el archivo copiado a tipos.ts

Si entramos en modo observador "tsc -w" también encontrará ese directorio y lo compilará. Pero no lo deseo, porque quiero tipos.ts sólo para mis propias notas.

Vamos a tsconfig.json y añadimos la línea: "exclude": ["demo-typescript/typescript"],

## 15. Template literales del ES6

```
(function(){

    function getEdad() {
        return 100 + 100 + 300;
    }
    const nombre = "Eduardo";
    const apellido = "Córdoba";
    const edad = 38;
    // const salida = nombre + apellido + edad;
    // const salida = nombre + " " + apellido + " ( " + edad + " ) ";
    // Eduardo Córdoba (Edad: 38)
    const salida = `${ nombre } \n${ apellido } \n( ${ edad + 100 } ) funcion edad= ${getEdad()}`;
    console.log(salida);

})();
```

## 16. Funciones: Parámetros opcionales, obligatorios y por defecto

```
//Función auto-invocada para evitar errores de variables reutilizadas
(function(){
    //quien = argumento obligatorio
    //momento = argumento opcional
    //objeto = argumento por defecto (inicializado con un valor por defecto)
    // El valor por defecto debería ser el último argumento
    function activar( quien: string,
                      momento?: string,
                      objeto:string = 'batiseñal'
                      ) {
        if ( momento ) {
            console.log(`${ quien } activó la ${ objeto } en la ${ momento }`);
        } else {
            console.log(`${ quien } activó la ${ objeto }`);
        }

    }
    activar('Gordon','tarde');
})();
```

## 17. Funciones de Flecha

```
//Función auto-invocada para evitar errores de variables reutilizadas
(function(){

    // Si declaramos la función en una constante no podremos sobreescribir la declaración de la función
    const miFuncion = function( a: string) {
        return a.toUpperCase();
    }
    //La misma función en versión "Función de flecha", si sólamente se va a retornar una línea de código se pueden ahorrar las llaves y el return
    const miFuncionF = ( a: string ) =>  a.toUpperCase();


    const sumarN = function( a:number, b:number) {
        return a + b;
    }
    const sumarF = ( a:number, b:number ) => a + b;
    console.log( sumarN (8,3) );
    console.log( sumarF (5,5) );

    const hulk = {
        nombre: 'Hulk',
        smash() {
            //setTimeout para ejecutar una función tras un tiempo(en milésimas de segundo)
            //Las funciones de flecha (setTimeout( ()=>)) no modifican a lo que apunta "this", this apunta a "const hulk"
            setTimeout( ()=> {

                console.log(`${ this.nombre } smash!!!`);

            }, 1000);
            
        }
    }
    //console.log( miFuncion('Normal') );
    //console.log( miFuncionF('Flecha') );

    hulk.smash();


})();
```

## 18. Desestructuración de Objetos y Arreglos (arrays)

```
//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(()=>{
    //objeto
    const avenger = {
       nombre: 'Steve',
       clave: 'Capitan América',
       poder: 'Droga'
    }
    //extraer propiedades
    /* console.log( avenger.nombre );
    console.log( avenger.clave );
    console.log( avenger.poder ); */
    //coger el objeto avenger y extraer todas sus propiedades, en este tipo de desestructuración no importa el orden
   /*  const {nombre, poder} = avenger;
    console.log( nombre );
    console.log( poder ); */
    //También funciona en los argumentos de una función
    /* const extraer = ( avenger: any ) => {
        const {nombre, poder} = avenger;
        console.log( nombre );
        console.log( poder );
    }
    extraer ( avenger ); */
    //Podemos pasarle directamente las propiedades extraídas
    const extraer = ( { nombre, poder }: any ) => {
        //const {nombre, poder} = avenger;
        console.log( nombre );
        console.log( poder );
    }
    //extraer ( avenger );
    //Desestructuración de arrays


    //Sin desestructurar:
    const avengers: string[] = ['Thor','Ironman','Spiderman'];
    console.log( avengers[0] );
    console.log( avengers[1] );
    console.log( avengers[2] );
    //Con desestructuración: puedo definir las variables en orden de suposición, con un objeto no es necesario, pero con un array si
    // const [ loki, hombre, arana] = avengers;
    //Si solo queremos un valor dejamos el resto vacío separados con comas
    //const [ , , arana] = avengers;
    /* console.log( loki );
    console.log( hombre ); */
    //console.log( arana );
    const extraerArr = ( [thor,ironman,spiderman]: string[]) => {
            console.log( thor );
            console.log( ironman );
            console.log( spiderman );
    }
    extraerArr(avengers);
})();
```

## 19. Promesas

```
//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(()=>{
//Las promesas, básicamente, nos sirven para ejecutar un código sin bloquear el código de la aplicación

    console.log('Inicio');
//Si definimos la promesa así nos da un error porque le falta una libreria, así que en el tsconfig.json tenemos que cambiar de es5 al es6
//'Promise' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later.ts(2585)
//Dentro de la promesa necesito mandar una función que lleve dos argumentos, dentro de esos argumentos necesito mandar dos funciones
//Una que se va a llamar usualmente "resolve", que es lo que vamos a retornar cuando todo funciona correctamente
//Y otra que se va a llamar "reject", que llamaremos si sucede algún error
    const prom1 = new Promise( ( resolve, reject) => {

        setTimeout(() => {
            //resolve('Se terminó el timeout');
            //Si ejecutamos el código aparecerá el console.log inicio, luego ejecutará la promesa, pero como tiene un retraso de 1 segundo no interrumpe el código, ejecuta el console.log de fin y luego aparece el mensaje de prom1
            reject('Se terminó el timeout');
            //Si ejecutamos el código aparecerá el console.log inicio, luego ejecutará la promesa, pero como tiene un retraso de 1 segundo no interrumpe el código, ejecuta el console.log de fin y luego aparece el error (sin atrapar, sin catch) de prom1
        }, 1000);

    });
    //Llamamos a la promesa prom1, tenemos tres opciones: Symbol, catch y then, Symbol es un identificador
    //Then es lo que yo quiero ejecutar cuando se realiza todo exitosamente y catch cuando sucede un error
    prom1
        .then( mensaje => console.log( mensaje ))
        .catch( err => console.warn(err));//console.warn se muestra en amarillo
    console.log('Fin');
})();
```

## 20. Promesas y su tipado en TypeScript
```
//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(()=>{
    //Para definir el tipo (tipado) de retorno de las promesas, vamos a definirlo tras los argumentos, indicando entre <> que tipo si hace el resolve (correcto)
    //:Promise<number>
    //
    const retirarDinero = ( montoRetirar: number): Promise<number> => {
        //Suponiendo que la cantidad de dinero esté en un backend, en un servidor, y se tiene que retirar de manera asíncrona, porque tengo que verificar
        //si en el servidor tengo esa cantidad de dinero, entonces la tarea se podría retrasar unos segundos
        let dineroActual = 1000;
        //Retirar dinero devolverá una promesa
        return new Promise( (resolve,reject) =>{

            if ( montoRetirar > dineroActual ) {
                reject('No hay suficientes fondos');
            } else {
                //dineroActual = dineroActual - montoRetirar; Siguiente línea version corta de esta línea de código
                dineroActual -= montoRetirar;
                //Una vez hecho el cálculo hago el resolve, no es obligatorio retornar algo, pero en este caso vamos a retornar el monto actual
                resolve( dineroActual );
            }
        } );

    }

    //Para poder manejar la promesa tenemos que especificar en la función el then o el catch
    retirarDinero( 500 )
        .then( montoActual => console.log(`Me queda ${ montoActual}`))
        //.catch( err => console.warn (err)); a continuación versión corta, porque solo estoy usando esa variable ahí
        .catch ( console.warn )
    
})();
```

## 21. Interfaces de TypeScript

```
//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(()=>{

    //Interfaces: Reglas que queremos que cumpla un objeto para que pueda usarse como un tipo
    //Es como crear un tipo de dato "tonto", no se pueden definir la funcionalidad de los métodos internamente
    //Son manera de definir reglas para que nosotros u otros compañeros sigan si quieren usar un tipo

    interface Xmen {//no hay código equivalente en js, cuando se compila no aparece nada en el .js, son puramente para ts
        nombre: string;
        edad: number;
        poder?: string;//Declarando la variable con ?: especificamos que esta variable es opcional
    }
    const enviarMision = ( xmen: Xmen ) => {//definido como tipo de interfaz customizada anteriormente

        console.log(`Enviando a ${ xmen.nombre } a la misión`);

    }

    const regresarAlCuartel = ( xmen: Xmen ) => {

        console.log(`Enviando a ${ xmen.nombre } a la misión`);

    }

    const wolverine: Xmen = {//Definiendo el interfaz a la hora de declarar el objeto me aseguro que se cumplan las condiciones de tipado
        nombre: 'Logan',
        edad: 60
    }
    enviarMision( wolverine );
    regresarAlCuartel( wolverine );

})();
```

## 22. Introducción a las Clases de la POO

>Controlado, pasando lección.

## 23. Definición de una clase básica en TypeScript

```
//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(()=>{

    //Convención de nombres de clases, capitalizar palabras
    class Avenger {
        //Nombre: tipo
        nombre: string = "Sin nombre";
        equipo: string;
        nombreReal: string; //lowercamelcase

        puedePelear: boolean;
        peleasGanadas: number;

    }

    const antman = new Avenger();

    console.log(antman);
})();
```

## 24. Constructores de una clase en TypeScript
```
//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(()=>{

    //Convención de nombres de clases, capitalizar palabras
    class Avenger {
        //Nombre: tipo
       /*  nombre: string;
        equipo: string;
        nombreReal: string; //lowercamelcase

        puedePelear: boolean;
        peleasGanadas: number; */

        //Constructor: función que se ejecuta cuando se crea una nueva instancia de una clase
        /* constructor( nombre: string , equipo: string){
            this.nombre = nombre; //this apunta a la propiedad nombre de la clase Avenger, y será igual al valor que se le pasa al constructor
            this.equipo = equipo;

        } */
        constructor( public nombre: string,
                     public equipo: string,
                     public nombreReal?: string,
                     public puedePelear: boolean = true,
                     public peleasGanadas: number = 0){}//public: acceso desde la clase o fuera de la misma

    }

    const antman = new Avenger('Antman','Capi');

    console.log(antman);
})();
```

## 25. Importaciones * URL

Descargamos el código de ejemplo de la lección: https://github.com/Klerith/webpack-starter-typescript

Dentro del directorio ejecutamos "npm install"

Posteriormente ejecutamos el index.ts con "npm start"

Creamos dentro del directorio src un nuevo directorio llamado "classes" o un nombre a nuestra elección, dentro de él creamos un archivo llamado "xmen.class.ts", el nombre .class. es opcional pero es una convencción opcional (alguna gente lo considera redundante)

Básicamente, para exportar una clase(xmen.class.ts):

```
export class Xmen {
    constructor(
        public nombre: string,
        public clave : string
    ){}

    imprimir() {
        console.log(`${ this.nombre } - ${ this.clave}`);
    }
}
```
Para importarla (index.ts):

```
import { Xmen } from './classes/xmen.class';

const wolverine = new Xmen('Logan','Wolverine');

wolverine.imprimir();
```

## 26. Decoradores de Clases
```
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
```
## 27. Tipado del retorno de una función
```
//Función auto-invocada de flecha para evitar errores de variables reutilizadas
(()=>{

    const sumar = (a: number, b: number): number =>  a + b;   
    
    const nombre = (): string => 'Hola Fernando';

    const obtenerSalario = ():Promise<string> => {

        return new Promise ( (resolve, reject) => {
            resolve('Fernando')
        });
    }

    obtenerSalario().then( a => console.log( a.toUpperCase() ) )
})();
```
## 28. Exámen práctico #1

Instrucciones
Descargue el material adjunto, el cual es un archivo de TypeScript.

Se requiere que sea lo más especifico posible en cuanto a los tipos y uso de lo aprendido en esta sección (como es el ES6)

Sea lo más explícito posible y siga las instrucciones que se encuentran en los comentarios del mismo.

Por si acaso tienen problemas con la descarga (por alguna razón) Les dejo aquí el código

Lean todos los comentarios y vean el siguiente video

## 29. Explicación de la tarea

> Ver vídeo

## 30. Resolución del examen práctico #1

## Cuestionario 1: Examen teórico #1

## 31. Código fuente de la sección
