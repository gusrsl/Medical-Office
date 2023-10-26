import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Entity('paciente')
@Schema()
export class PacienteEntity {
  @PrimaryGeneratedColumn()
  @Prop({ type: Number })
  pacienteID: number;

  @Column()
  @Prop({ type: String })
  nombre: string;

  @Column()
  @Prop({ type: String })
  apellido: string;

  @Column({ type: 'date' })
  @Prop({ type: Date })
  fechaNacimiento: Date;
}

export const PacienteSchema = SchemaFactory.createForClass(PacienteEntity);
