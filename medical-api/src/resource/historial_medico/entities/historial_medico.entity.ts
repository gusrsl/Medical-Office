/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { PacienteEntity } from '../../paciente/entities/paciente.entity';
import { MedicoEntity } from '../../medico/entities/medico.entity';

@Entity()
export class HistorialMedicoEntity {
  @PrimaryGeneratedColumn()
  historialID: number;

  @ManyToOne(() => PacienteEntity, { cascade: true, eager: true, nullable: false })
  paciente: PacienteEntity;

  @ManyToMany(() => MedicoEntity, { cascade: true })
  @JoinTable()
  medicos: MedicoEntity[];

  @Column()
  diagnostico: string;

  @Column()
  tratamiento: string;
}
