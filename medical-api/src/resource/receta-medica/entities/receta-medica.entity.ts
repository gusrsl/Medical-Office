/* eslint-disable prettier/prettier */
// receta-medica.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { CitaEntity } from '../../cita/entities/cita.entity';
import { PacienteEntity } from '../../paciente/entities/paciente.entity';

@Entity()
export class RecetaMedicaEntity {
  @PrimaryGeneratedColumn()
  recetaID: number;

  @OneToOne(() => CitaEntity, { cascade: true })
  @JoinColumn()
  cita: CitaEntity;

  @OneToOne(() => PacienteEntity, { cascade: true })
  @JoinColumn()
  paciente: PacienteEntity;

  @Column()
  medicamentosRecetados: string;

  @Column()
  instrucciones: string;
}
