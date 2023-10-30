/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { LaboratorioEntity } from '../../laboratorio/entities/laboratorio.entity';
import { PacienteEntity } from '../../paciente/entities/paciente.entity';

@Entity()
export class ResultadoExamenEntity {
  @PrimaryGeneratedColumn()
  resultadoID: number;

  @ManyToOne(() => LaboratorioEntity, (laboratorio) => laboratorio.resultadosExamenes) // Relación 1 a 1 con Laboratorio
  laboratorio: LaboratorioEntity;

  @OneToOne(() => PacienteEntity, { cascade: true }) // Relación 1 a 1 con Paciente
  @JoinColumn()
  paciente: PacienteEntity;

  @Column()
  fechaExamen: Date;

  @Column()
  resultado: string;
}
