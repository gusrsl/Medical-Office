/* eslint-disable prettier/prettier */
import { Document, Schema } from 'mongoose';

export interface EnfermedadModel extends Document {
  nombre: string;
  descripcion: string;
}

export const EnfermedadSchema = new Schema({
    nombre: String,
    descripcion: String,
  });
