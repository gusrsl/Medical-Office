/* eslint-disable prettier/prettier */
import { Document, Schema } from 'mongoose';

export const MedicamentoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
});

export interface MedicamentoModel extends Document {
  nombre: string;
  descripcion: string;
}