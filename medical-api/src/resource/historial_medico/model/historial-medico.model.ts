/* eslint-disable prettier/prettier */
/* historial-medico.model.ts */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class HistorialMedicoModel extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Paciente' })
  paciente: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Medico' })
  medico: Types.ObjectId;

  @Prop()
  diagnostico: string;

  @Prop()
  tratamiento: string;
}

export const HistorialMedicoSchema = SchemaFactory.createForClass(HistorialMedicoModel);
