/* eslint-disable prettier/prettier */
// receta-medica.model.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class RecetaMedicaModel extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Cita' })
  cita: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Paciente' })
  paciente: Types.ObjectId;

  @Prop({ type: String })
  medicamentosRecetados: string;

  @Prop({ type: String })
  instrucciones: string;
}

export const RecetaMedicaSchema = SchemaFactory.createForClass(RecetaMedicaModel);
