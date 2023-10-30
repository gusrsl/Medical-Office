/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class CitaModel extends Document {
  @Prop({ type: Date })
  fechaYHora: Date;

  @Prop({ type: Types.ObjectId, ref: 'Paciente' })
  paciente: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Medico' })
  medico: Types.ObjectId;
}

export const CitaSchema = SchemaFactory.createForClass(CitaModel);
