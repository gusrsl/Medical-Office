/* eslint-disable prettier/prettier */
// laboratorio.model.ts (MongoDB)
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ResultadoExamenModel } from '../../resultado-examen/model/resultado-examen.model';
import { MedicoModel } from '../../medico/model/medico.model';

@Schema()
export class LaboratorioModel extends Document {
  @Prop()
  nombre: string;

  @Prop()
  dirección: string;

  @Prop()
  teléfono: string;

  // Relación con Medico (1 a muchos, un médico puede estar asociado a varios laboratorios)
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Medico' }] })
  medicos: MedicoModel[];

  // Relación con ResultadoExamen (1 a muchos, un laboratorio puede tener varios resultados de exámenes)
  @Prop({ type: [{ type: Types.ObjectId, ref: 'ResultadoExamen' }] })
  resultadosExamen: ResultadoExamenModel[];
}

export const LaboratorioSchema = SchemaFactory.createForClass(LaboratorioModel);
