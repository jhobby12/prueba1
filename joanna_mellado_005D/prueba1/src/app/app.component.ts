import { Component } from '@angular/core';
import {Alumno} from './modelo/alumno';
import {TipoSeccion} from './modelo/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public escucharGuardarAlumno(evento:Event): void{
    const res = evento.target as HTMLInputElement
  }

  public escucharAlumnos(evento:Event): void {
    console.log(evento);
  }
}




