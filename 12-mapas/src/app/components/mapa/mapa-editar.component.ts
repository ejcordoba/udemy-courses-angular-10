import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog , MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: MatDialog ) {
    console.log( data );
  }

  ngOnInit(): void {
  }

}
