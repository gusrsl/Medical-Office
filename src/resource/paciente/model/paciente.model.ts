import { Document } from 'mongoose';

export interface Paciente {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  // Otras propiedades específicas de MongoDB
}

export type PacienteDocument = Paciente & Document;
