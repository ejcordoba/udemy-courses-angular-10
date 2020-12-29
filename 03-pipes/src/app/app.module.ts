import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';// LOCALE_ID nos provee de un token de localización
// Para el manejo de idiomas en el ejemplo de pipe de DatePipe
import { registerLocaleData } from '@angular/common';
import  localEs  from '../../node_modules/@angular/common/locales/es';
registerLocaleData(localEs);

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
