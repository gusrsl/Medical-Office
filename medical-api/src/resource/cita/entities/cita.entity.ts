/* eslint-disable prettier/prettier */
// cita.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { PacienteEntity } from '../../paciente/entities/paciente.entity';
import { MedicoEntity } from '../../medico/entities/medico.entity';
import { RecetaMedicaEntity } from '../../receta-medica/entities/receta-medica.entity';

@Entity()
export class CitaEntity {
  @PrimaryGeneratedColumn()
  citaID: number;

  @Column()
  fechaYHora: Date;

  @OneToOne(() => PacienteEntity, { cascade: true })
  @JoinColumn()
  paciente: PacienteEntity;

  @OneToOne(() => MedicoEntity, { cascade: true })
  @JoinColumn()
  medico: MedicoEntity;

  @OneToOne(() => RecetaMedicaEntity, { cascade: true }) // Relación 1 a 1 con Receta Médica
  @JoinColumn()
  recetaMedica: RecetaMedicaEntity;
}
