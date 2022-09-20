import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s:string]: boolean
}
@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera( control: FormControl ):  ErrorValidate  {

    if ( control.value?.toLowerCase() === 'herrera') {
      return {
        noHerrera: true
      };
    }

    return null;
  }

  passwordsIguales( pass1Value: string , pass2Value: string ) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.controls[pass1Value];
      const pass2Control = formGroup.controls[pass2Value];

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors( {noEsIgual: true} );
      }
    }
  }

  existeUsuario( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {

    if ( !control.value ) {
      return Promise.resolve(null)
    }

    return new Promise( (resolve, reject) => {

      setTimeout(() => {
        if ( control.value === 'strider' ) {
          resolve({ existe: true })
        } else {
          resolve( null )
        }
      }, 3500);
    })
  }
}
