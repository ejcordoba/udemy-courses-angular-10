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


