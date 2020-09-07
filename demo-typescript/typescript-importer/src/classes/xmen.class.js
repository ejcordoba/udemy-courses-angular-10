"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function imprimirConsola(constructorClase) {
    console.log(constructorClase);
} //Para recibir el constructor de la función, o firma de la clase
//Un decorador es algo que se le va a colocar (en este caso decorador de clase) antes de la definición de la clase
let Xmen = 
//El decorador permite añadir funcionalidades a la clase. Una función que se ejecuta en las clases, expandiendo su funcionalidad
class Xmen {
    constructor(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    imprimir() {
        console.log(`${this.nombre} - ${this.clave}`);
    }
};
Xmen = __decorate([
    imprimirConsola //<-- Decorador, tenemos que configurar en el tsconfig.json para que lo acepte: "experimentalDecorators": true
    //El decorador permite añadir funcionalidades a la clase. Una función que se ejecuta en las clases, expandiendo su funcionalidad
], Xmen);
exports.Xmen = Xmen;
