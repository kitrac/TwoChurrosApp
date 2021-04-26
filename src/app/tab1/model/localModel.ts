export class LocalModel {
  id: number;
  mapa: string;
  localidad: string;
  direccion: string;
  horarios: Horario[];
}

export class Horario {
  dia: string;
  horario: string;
}
