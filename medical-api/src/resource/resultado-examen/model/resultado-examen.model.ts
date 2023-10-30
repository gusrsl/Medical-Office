/* eslint-disable prettier/prettier */
// resultado-examen.model.ts (MongoDB)
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { LaboratorioModel } from '../../laboratorio/models/laboratorio.model';
import { PacienteModel } from 'src/resource/paciente/model/paciente.model';


@Schema()
export class ResultadoExamenModel extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Laboratorio' })
  laboratorio: LaboratorioModel;

  @Prop({ type: Types.ObjectId, ref: 'Paciente' })
  paciente: PacienteModel;

  @Prop()
  fechaExamen: Date;

  @Prop()
  resultado: string;
}

export const ResultadoExamenSchema = SchemaFactory.createForClass(ResultadoExamenModel);
