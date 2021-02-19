import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: '',
    apellidos:'',
    correo:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar( forma: NgForm ) {

    console.log( forma );

    if ( forma.invalid ) {
      Object.values( forma.controls ).forEach( control => {

        control.markAsTouched();
      });
      return;
    }
  }

}
