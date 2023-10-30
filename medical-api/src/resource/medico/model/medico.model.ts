/* eslint-disable prettier/prettier */
// medico.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ConsultorioModel } from '../../consultorio/model/consultorio.model';
import { LicenciaModel } from '../../licencia/model/licencia.model';

export interface MedicoModel {
  id: number;
  nombre: string;
  especialidad: string;
  licencias: LicenciaModel;
  consultorios: ConsultorioModel[];
}

export type MedicoDocument = MedicoModel & Document;

@Schema()
export class MedicoMongooseModel {
  @Prop()
  id: number;

  @Prop()
  nombre: string;

  @Prop()
  especialidad: string;

  @Prop({ type: LicenciaModel })
  licencias: LicenciaModel;

  @Prop({ type: ConsultorioModel })
  consultorios: ConsultorioModel[];
}

export const MedicoSchema = SchemaFactory.createForClass(MedicoMongooseModel);
