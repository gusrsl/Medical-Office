/* eslint-disable prettier/prettier */
// paciente.model.ts
// src/resource/paciente/model/paciente.model.ts
import * as mongoose from 'mongoose';

export const PacienteSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  fechaNacimiento: Date,
  // Definir otras propiedades específicas de MongoDB
});

export interface PacienteModel extends mongoose.Document {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  // Otras propiedades específicas de MongoDB
}