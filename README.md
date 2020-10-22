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

```
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
```

## Cuestionario 1: Examen teórico #1

> Resuelto / Aprobadas 9 de 10

## 31. Código fuente de la sección

> Descargar typescript.zip

# Sección 3:Aplicación #1: Hola Mundo

## 35. Introducción a los componentes y directivas estructurales.

- Componentes: Pequeñas clases que cumplen una tarea específica, por ejemplo: Menú de navegación, Barra Lateral, Páginas, sub-páginas...footer...

- Directivas estructurales: Instrucciones que indical al HTML qué hacer, *ngIf por ejemplo para mostrar o no contenedores, etc ... *ngFor para hacer repeticiones de elementos HTML

## 36. Nuestra primera interacción en Angular

> Visitar https://angular.io

- Cuando buscamos en la web nos aparecen informaciones con un icono delante que representa:
- Pk: Package
- C: Clase
- I: Interfaz
- K: Constante
- F: Función
- E: Enumeración
- P: Pipe

> Visitar https://plnkr.co/ Que se usará para códigos de demostración
> También https://stackblitz.com/

Usando este último crearemos un nuevo proyecto de Angular para testeo.

## 37. Nota de Actualización del Angular CLI

> Al hacer ng new miApp ahora Angular CLI hace dos preguntas:

- Would you like to add Angular routing? No -> Nosotros haremos nuestras propias rutas
- Which stylesheet format would you like to use? CSS (a elegir entre CSS, SCSS, SASS, LESS, Stylus)

## 38. Creando un entorno local de Angular

- https://angular.io/guide/quickstart
- Angular CLI
> ng new my-app
> ng serve -o 

- app.compontent.html:
```
<h1>Hola Mundo</h1>

<ul>
    <li>Nombre: {{ nombre }}</li>
    <li>Apellido: {{ apellido }}</li>
</ul>
```
- app.component.ts:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre = 'Fernando';
  apellido = 'Herrera';
}

```

## 39. Estructura del proyecto

- e2e: Test end to end, pruebas unitarias, integración, pruebas automáticas
- node_modules: módulos de node.js
- src: aplicación de Angular
    - app
        - Primera aplicacion de angular
            - app.component.ts: primer componente
            - app.component.css: archivo de estilo que sólo se aplica a este componente
            - app.component.html: html del componente
            - app.component.spec.ts: Archivo de pruebas automáticas (todo archivo "spec")
            - app.module.ts.
    - assets: Recursos estáticos, imágenes, etc...
    - enviroments:
        - enviroment.prod.ts: Variable de ambiente de producción
        - enviroment.ts: Variable de ambiente de desarrollo
    - browserslist: lista de navegadores para consolidación de CSS
    - karma.conf.js: archivo de configuración de las pruebas de karma
    - main.js: Primer código que Angular ejecutará para lanzar la aplicación
        - platformBrowserDynamic(): Es una función que configura todo el ambiente para una aplicación web
    - polyfills.ts: Funciones que ayudan a la compatibilidad entre versiones antiguas de navegadores web
    - styles.css: CSS global de la aplicación
    - index.html: Toda la aplicación se renderiza en <app-root>
    - tsconfig.app.json: Especificaciones propias de la aplicacion de typescript
    - tsconfig.spec.json: Configuración para las pruebas
    - tslint.json: formas para la presentación de errores de código
- .editorconfig: configuración del editor
- .gitignore: ignorar archivos para el repositorio
- angular.json: configuración de la aplicación
- package-lock.json: nos dice como fué creado package.json
- package.json: dependencias de producción, de desarrollo
- README.md: cómo funciona la aplicación, archivo Markdown
- tsconfig.json: le dice a typescript cómo trabajar
- tslint.json: reglas de escritura

## 40. Utilizando Bootstrap 4

> https://getbootstrap.com/ -> Download
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

```

- Creación manual de un componente:

    - app/components/header/header.component.ts

- Indicar a la aplicación la creación del componente:
    - app/app.module.ts

- app.module.ts:
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [// Declarar componentes
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
- app.component.html
```
<app-header></app-header>

<ul>
    <li>Nombre: {{ nombre }}</li>
    <li>Apellido: {{ apellido }}</li>
</ul>
```
- header.component.ts
```
import { Component } from '@angular/core';

/* Declaramos decorador para indicar que la clase HeaderComponen instanciará un componente */
@Component({
    selector: 'app-header', // Para llamar al componente mediante etiqueta en el html
    template: `<h1>Header component</h1>` // HTML que se mostrará, o bien código directamente si es poco, o bien llamada a la plantilla HTML
})
export class HeaderComponent { // indicamos export para poder llamarlo en app.module.ts

}
```

## 41. TemplateUrl: Separando el HTML del componente

Vamos a https://getbootstrap.com/ -> Buscamos el navbar

Copiamos el código HTML del navbar y lo incluimos en el template del componente en header.component.ts

```
import { Component } from '@angular/core';

/* Declaramos decorador para indicar que la clase HeaderComponen instanciará un componente */
@Component({
    selector: 'app-header', // Para llamar al componente mediante etiqueta en el html
    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    `
})
export class HeaderComponent { // indicamos export para poder llamarlo en app.module.ts

}
```

tslint nos avisará de que incluir todo ese código directamente excede el máximo permitido, esto se puede ajustar cambiando el parámetro max-line-length en tslint.json

Podemos tanto cambiar el máximo permitido, como desactivar el warning poniendo la propiedad en "false"

```
"max-line-length": [
      false,
      140
    ],    
```
De todas maneras, como hemos comentado, cuando en template el código supera unas cuatro líneas empieza a no ser manejable, así que es recomendable crear un archivo template aparte:

> app/components/header/header.component.html

Aquí copiamos todo el código HTML del navbar

En el decorador del componente tenemos que eliminar el código que teníamos en template, y renombrar template como templateUrl para especificar la ruta a la plantilla html que hemos creado

Crearemos también un body de la misma manera, a la misma etiqueta html de componente podemos añadirle estilos, de esta manera

><app-body class="container"></app-body>

Recordar añadir los componentes al módulo de app (app.module.ts):

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
@NgModule({
  declarations: [// Declarar componentes
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 42. Creando el footer.component

En este caso vamos a usar angularCLI para crear el componente

>ng g c components/footer

Esto es la abreviatura de:

>ng generate component components/footer
```
$ ng g c components/footer
CREATE src/app/components/footer/footer.component.html (21 bytes)
CREATE src/app/components/footer/footer.component.spec.ts (628 bytes)
CREATE src/app/components/footer/footer.component.ts (275 bytes)
CREATE src/app/components/footer/footer.component.css (0 bytes)
UPDATE src/app/app.module.ts (627 bytes)
```

Una vez generado ya tenemos todos los archivos, incluidas las importaciones en app.module.ts

Entonces podemos añadir código al footer.component.html:

```
<footer class="footer bg-dark text-center">
    <div class="container">
        <p>
            &copy; Eduardo Córdoba 2020
        </p>
    </div>
</footer>
```

Y llamar al componente en app.component.html:

```
<app-header></app-header>

<app-body class="container"></app-body>

<app-footer></app-footer>
```

Para posicionar el componente abajo en la web, usamos estilos CSS, al ser un estilo común es recomendable hacerlo en src/styles.css

```
footer {
  color: white;
  position: fixed;
  bottom: 0;
}
```

Vamos a hacer que en el footer se visualice el año actual automáticamente, para eso usaremos la función Date() de JavaScript, declaramos la variable anio y en el constructor la inicializamos con la función que devuelve el año actual, de tal manera que cuando se cargue la aplicación y este componente, en el HTML aparecerá ese valor, será de la siguiente manera, en footer.component.ts:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }

}
```

En footer.component.html:

```
<footer class="footer bg-dark text-center">
    <div class="container">
        <p>
            &copy; {{ anio }} Eduardo Córdoba
        </p>
    </div>
</footer>
```

## 43. Estructura del body component

Vamos a https://getbootstrap.com/ -> Buscamos cards y cogemos un código tipo este:

```
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
```

Vamos a https://getbootstrap.com/ -> Buscamos list group y cogemos un código tipo este:

```
<ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
        </ul>
```

Modificamos y ajustamos el estilo del app.component.html para que reciba los nuevos elementos, algo así:

```
<app-header></app-header>

<div class="container mt-5">
    <app-body></app-body>
</div>

<app-footer></app-footer>
```

Y quedaría el body.component.html tal que:

```
<div class="row">
    <div class="col">
        <h1>*ngIf</h1>
        <hr>
        <div class="card text-white bg-primary mb-3" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title">Primary card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <button class="btn btn-outline-primary btn-block">Mostrar/Ocultar</button>
    </div>
    <div class="col">
        <h1>*ngFor</h1>
        <hr>
        <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
        </ul>
    </div>
</div>
```

## 44. Directivas estructurales: *ngFor y el *ngIf

Vamos a usar estas directivas para generar dinámicamente código HTML en nuestros elementos del body component

Creamos un objeto con dos atributos tipo string:

```
export class BodyComponent { // indicamos export para poder llamarlo en app.module.ts

    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    };
}
```

Y luego las llamamos en el html tipo {{ objeto.atributo }}

```
<div class="card-body">
                <h5 class="card-title"> {{ frase.autor }} </h5>
                <p class="card-text"> {{ frase.mensaje }} </p>
            </div>
```

Ahora usaremos *ngIf para mostrar u ocultar la tarjeta, para ello declaramos una variable booleana que haga de bandera en el componente:

```
export class BodyComponent { // indicamos export para poder llamarlo en app.module.ts

    mostrar = true;
```

Y añadimos la condición *ngIf al elemento que queremos manipular, además de en el boton añadir un evento (click) que vaya alternando el valor de la bandera de true a false y viceversa:

```
 <div *ngIf="mostrar" class="card text-white bg-primary mb-3" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title"> {{ frase.autor }} </h5>
                <p class="card-text"> {{ frase.mensaje }} </p>
            </div>
        </div>
        <button (click)="mostrar = !mostrar" class="btn btn-outline-primary btn-block">Mostrar/Ocultar</button>
```

Y ahora para usar el *ngFor y generar la lista dinámicamente primero creamos un array de string en el componente:

```
export class BodyComponent { // indicamos export para poder llamarlo en app.module.ts

    mostrar = true;
    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    };

    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}
```

Y posteriormente lo llamamos, aprovechamos tambien para guardar el index y usarlo para puntuar numéricamente la lista:

```
<ul class="list-group">
            <li *ngFor="let personaje of personajes; let i = index" class="list-group-item">
                {{ i +1 }} - {{ personaje }}
            </li>
        </ul>
```

## Cuestionario 2: Examen teórico - de la sección Hola Mundo

10 de 10 !!!

# Sección 4:Aplicación #2: Aplicación de una sola página (SPA)

¿Qué veremos en esta sección?

A continuación vamos a aprender sobre los siguientes temas:

- Crearemos una aplicación de una sola página (Single Page Application)
- Creación de proyectos de Angular usando el CLI (Command Line Interface)
- Instalando bootstrap o librerías de terceros usando el Angular-CLI
- Creación de rutas de nuestra aplicación
- Uso de RouterLink y RouterLinkActive para movernos de página y colocar clases a los elementos activos.
- Uso del modulo Router, que nos permite movernos de página mediante código.
- Obtención de parámetros vía URL.
- Configuración de nuestro primer servicio en Angular para el manejo de la data.
- Breve introducción a los Pipes 
- Uso del buscador del navbar para realizar una consulta a nuestro arreglo de héroes.
- Durante la sección, tendremos una tarea práctica bastante retadora pero servirá de reforzamiento de todo lo que veremos en esta sección.

## 49. Iniciar el proyecto - SPA

Sencillamente creamos el nuevo proyecto con:

>ng new spa

Para luego renombrar la carpeta "spa" a 02-spa, y entrando en ella lanzar el proyecto con:

>ng serve -o

## 50. Creando la estructura de nuestro proyecto

Básicamente creamos dos componentes para empezar, uno para la home y otro que sea un navbar que se encuentre en un subdirectorio de componentes compartidos (comunes) a la SPA

>ng g c components/shared/navbar

>ng g c components/home

Y limpiamos cosas que no queremos, archivos css y spec

## 51. Instalando el bootstrap (u otras liberías de terceros) cuando usamos el Angular-CLI

1. Instalando el Boostrap CDN (requiere internet)(normalmente ya se encontrará en el caché del navegador del cliente)

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
```
```
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
```

Los scripts deberemos colocarlos al final del body, y el link al final del head

2. Instalación local: Descarga directa de bootstrap

https://getbootstrap.com/docs/4.5/getting-started/download/

Creamos en nuestro proyecto la ruta src/assets/libs/dist y dentro copiamos los directorios css y js que hemos descargado

Puede tener la formación de rutas que sea, pero que esté dentro de assets

Se debería repetir esto con todas las librerias que se refirieron en el punto 1, y luego referenciarlas con rutas relativas tipo:

```<link rel="stylesheet" href="./assets/libs/bootstrap/css/bootstrap.min.css">```

3. Instalación con el Gestor de Paquetes de Node.js (npm)

>npm install bootstrap --save

Una vez terminado tendremos bootstrap dentro de node_modules

Hacer lo mismo para jquery y popper.js

>npm install jquery --save

>npm install popper.js --save

(Nota: Esto puede haber cambiado en las últimas versiones de Angular.....)

Ahora habría que especificar en angular.json donde está el css de bootstrap y las librerías javascript a utilizar:

```
                        "styles": [
                            "src/styles.css",
                            "node_modules/bootstrap/dist/css/bootstrap.min.css"
                        ],
                        "scripts": [
                            "node_modules/jquery/dist/jquery.slim.min.js",
                            "node_modules/popper.js/dist/umd/popper.min.js",
                            "node_modules/bootstrap/dist/js/bootstrap.min.js"
                        ]
```

## 52. Configurando el navbar y otros componentes

Copiamos los archivos de imágenes del curso en assets/img

Copiamos el favicon.ico en src/

Usamos template de bootstrap para definir el navbar.component.html:

```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
        <img src="assets/img/A-64.png" width="30" height="30" alt="" loading="lazy">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>
```

Usamos template de bootstrap para definir el home.component.html:

```
<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Comic App</h1>
        <p class="lead">Esta es una aplicación de comics.</p>
    </div>
</div>
```

Llamamos a los componentes en el app.component.html

```
<app-navbar></app-navbar>
<app-home></app-home>
```

Instalamos un par de componentes más: about y heroes, este ultimo lo vamos a crear sin archivo de estilos "-is" (inline style)

> ng g c components/about

> ng g c components/heroes -is

## 53. Rutas en Angular

Las rutas nos permiten navegar por los diferentes componentes (páginas) sin hacer refresh del navegador

Creamos un nuevo archivo en src/app/app.routes.ts (el nombre es una convención), tiene una sintaxis particular:

si tenemos snippets instalados con escribir ng2routes y pulsar enter se nos genera el código, sino tendríamos que escribir:

```
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [ // Array de rutas, cada ruta tiene un path y un componente
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' } // La ruta ** es una ruta especial por si no consigue hacer match con ninguna de las otras
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
// Si enviamos parámetros por url y hacemos refresh puede fallar, entonces usaríamos el sistema de hash en la URL
// Para usar el sistema de hash en la URL sería:
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});
// De otro modo tendríamos que indicar en el servidor, con .htaccess por ejemplo, que redirija a la raíz.
// De manera automática nos configuró angular-cli en el index.html <base href="/"> necesario si no vamos a usar hash.
```

Para indicar a Angular las rutas que tiene que usar, tenemos que definirlo en app.module.ts:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTING } from './app.routes'; // Importamos el sistema de rutas
// Servicios

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING // Añadimos el routing a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 54. RouterLink y RouterLinkActive - Completando las rutas

Y en nuestro html los enlaces quedarán así en navbar.component.html:
```
<div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <!-- Class active para marcar enlace activo -->
            <li class="nav-item">
                <a class="nav-link" [routerLink]="['home']">Home</a> <!-- Para definir la ruta usarmos router link en lugar de href de html
                usa un array como parámetro, cada uno de los elementos del array serían las sub-rutas de la url -->
            </li>
            <li class="nav-item">
                <a class="nav-link" [routerLink]="['heroes']">Heroes</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" [routerLink]="['about']">About</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
```

Hemos añadido algunos efectos de transición en el archivo styles.css

También añadimos la clase especial <li class ="nav-item" routerLinkActive="active"> para asignar los enlaces activos.

Como el <a> tiene un routerLink mira el elemento padre y al detecar routerLinkActive aplica la clase "active" (podría ser otra)

## 55. Componente Heroes - diseño

Para la sección heroes usaremos cards de Bootstrap, de momento usaremos una ruta estática, pero en la siguiente lección usaremos servicios:

```
<h1>Héroes <small>Marvel y DC</small></h1>
<hr>

<div class="card-columns">
    <div class="card">
        <img src="assets/img/aquaman.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          <button type="button" class="btn btn-outline-primary btn-block">
              Ver más...
          </button>
        </div>
    </div>
</div>
```
## 56. Introducción a los Servicios

Los servicios:

- Brindan información a quien lo necesite
- Realizan peticiones CRUD (create, read, update, delete)
- Mantienen la data de forma persistente
- Sirven como recurso reutilizable para nuestra aplicación

## 57. Creando nuestro primer servicio - HeroesService

Creamos el directorio src/app/servicios

Y dentro de él el archivo de servicios, por convención será .service src/app/servicios/heroes.service.ts

Para definir el archivo con los snippets podemos hacer "ng2service", sino pues el código sería:

```

import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {


    constructor() {
        console.log("Servicio listo para usar!!!");
    }
}
```

Posteriormente le informamos a Angular de que dispone de este servicio en app.module.ts:

```
// Servicios
import { HeroesService } from './servicios/heroes.service';
providers: [
    HeroesService
  ],
```

Ahora para usar nuestro servicio en heroes.components.ts primero lo importamos y después lo llamamos en el constructor para usarlo, posteriormente copiamos el array de objetos de los recursos en un objeto privado "private". Luego creamos un metodo público de acceso a los datos.

```

import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

    private heroes:any[] = [
        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];

    constructor() {
        console.log("Servicio listo para usar!!!");
    }

    getHeroes() {
        return this.heroes;
    }
}
```

Posteriormente en el componente de héroes heroes.component.ts inicializamos un array que posteriormente rellenaremos usando el método getHeroes() definido previamente:

```
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];

  constructor( private _heroesService:HeroesService ) { // _heroesService es el alias que tendrá el servicio
    console.log("constructor");
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log( this.heroes);
  }

}
```

Si queremos prevenir que no se incluyesen datos fuera de la estructura del objeto de héroes, podemos crear una interfaz en el servicio, tipo:

```
export interface Heroe {
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
};
```
Y entonces podemos declarar el array que contendrá la información como:

```
private heroes:Heroe[] = [
```

Y para poder acceder a todas las clases y métodos del servicio podemos importar la interfaz en heroes.components.ts tal que:

```
import { HeroesService, Heroe } from '../../servicios/heroes.service';

```

Y para ser más específicos aún podemos ahora definir el método que devuelve los héroes de esta manera:

```
getHeroes():Heroe[] {
        return this.heroes;
    }
```