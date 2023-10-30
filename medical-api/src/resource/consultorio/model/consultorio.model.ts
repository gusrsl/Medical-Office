/* eslint-disable prettier/prettier */
// consultorio.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ConsultorioModel extends Document {
  @Prop()
  Nombre_Consultorio: string;

  @Prop()
  Direccion: string;
}

export interface Consultorio {
    Nombre_Consultorio: string;
    Direccion: string;
  }
  

export const ConsultorioSchema = SchemaFactory.createForClass(ConsultorioModel);
