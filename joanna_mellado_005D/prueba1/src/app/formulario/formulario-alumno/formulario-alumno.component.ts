import { Component, Output, EventEmitter } from '@angular/core';
import {Alumno} from './../../modelo/alumno';
import {TipoSeccion} from './../../modelo/seccion';


@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Output() public res = new EventEmitter <Alumno>();
public alumno: Alumno ={
  rutPk: 0,
  nombreAlumno: '',
  apellidoAlumno: '',
  edadAlumno : 1,
  seccion: '001D'
}

public cambiarNombre(evento:Event): void {
  const resu = evento.target as HTMLInputElement;
  this.alumno.nombreAlumno = resu.value;
}

public cambiarApellido(evento:Event): void {
  const resu = evento.target as HTMLInputElement;
  this.alumno.apellidoAlumno = resu.value;
}

public cambiarSeccion(evento:Event): void {
  const resu = evento.target as HTMLSelectElement;
  this.alumno.seccion = resu.value as TipoSeccion;
}

public guardarAlumno(): void {
  const copia: Alumno = {...this.alumno};
  this.res.emit(copia)
  this.alumno.nombreAlumno='';
  this.alumno.apellidoAlumno='';
  this.alumno.seccion='001D';
}


}
