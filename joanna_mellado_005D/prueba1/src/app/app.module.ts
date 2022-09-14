import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { ListaHistorialComponent } from './componentes/lista-historial/lista-historial.component';
import { FormularioAlumnoComponent } from './formulario/formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './formulario/formulario-seccion/formulario-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ListaAlumnosComponent,
    HistorialComponent,
    ListaHistorialComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
