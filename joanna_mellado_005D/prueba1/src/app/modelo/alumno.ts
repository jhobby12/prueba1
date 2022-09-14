import { TipoSeccion } from "./seccion";

export type TipoAlumno = '';
export interface Alumno {
  rutPk: number;
  nombreAlumno: string;
  apellidoAlumno: string;
  edadAlumno: number;
  seccion: TipoSeccion;
}
