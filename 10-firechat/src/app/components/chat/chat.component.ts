import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent{

  mensaje: string = "";
  constructor( public _cs: ChatService ) { 

    this._cs.cargarMensajes()
      .subscribe();
  }

  enviar_mensaje() {
    console.log(this.mensaje);
  }
  
}
