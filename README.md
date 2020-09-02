# angular-10

## Curso de Udemy Angular: De cero a experto (Angular 10+)

Udemy Angular course: From zero to expert (Angular 10+)

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

let mensaje: string = "Hola";

let numero: number = 123;

let booleano: boolean = true;

let hoy: Date = new Date();

let cualquiercosa;

//let cualquiercosa: string | number; <-- asignar varios tipos a una misma variable con un pipe

cualquiercosa = mensaje;

cualquiercosa = numero;

cualquiercosa = booleano;

cualquiercosa = hoy;

let spiderman = {
    nombre: 'Peter',
    edad: 30
};
spiderman = {
    nombre: 'Juan',
    edad: 40
};

## 14. Excluir archivos a traducir

Exclusión de archivos a traducir de TS a JS

Creamos un nuevo directorio "typescript" y hacemos una copia del archivo app.ts, renombramos el archivo copiado a tipos.ts

Si entramos en modo observador "tsc -w" también encontrará ese directorio y lo compilará. Pero no lo deseo, porque quiero tipos.ts sólo para mis propias notas.

Vamos a tsconfig.json y añadimos la línea: "exclude": ["demo-typescript/typescript"],

## 15. Template literales del ES6
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

## 16. Funciones: Parámetros opcionales, obligatorios y por defecto
//Función auto-invaocada para evitar errores de variables reutilizadas
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

## 17. Funciones de Flecha

//Función auto-invaocada para evitar errores de variables reutilizadas
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

## 18. Desestructuración de Objetos y Arreglos (arrays)

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
