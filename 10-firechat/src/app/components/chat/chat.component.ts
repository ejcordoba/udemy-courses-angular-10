import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent{

  mensaje: string = "";
  constructor() { }

  enviar_mensaje() {
    console.log(this.mensaje);
  }
  
}
