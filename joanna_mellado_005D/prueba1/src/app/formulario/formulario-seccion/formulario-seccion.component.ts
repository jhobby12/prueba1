import { Component, Output, EventEmitter } from '@angular/core';
import {Seccion} from './../../modelo/seccion'

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent{
  @Output() public res = new EventEmitter <Seccion>();
  public seccion: Seccion ={
    nombreSeccion:''
  }

  public cambiarNombre(evento:Event): void {
    const resu = evento.target as HTMLInputElement;
    this.seccion.nombreSeccion = resu.value;
  }


}
