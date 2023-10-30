/* eslint-disable prettier/prettier */
// paciente.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { CitaEntity } from '../../cita/entities/cita.entity';
import { HistorialMedicoEntity } from '../../historial_medico/entities/historial_medico.entity';
import { RecetaMedicaEntity } from '../../receta-medica/entities/receta-medica.entity';

@Entity()
export class PacienteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  fechaNacimiento: Date;

  @OneToMany(() => CitaEntity, (cita) => cita.paciente)
  citas: CitaEntity[];

  @OneToOne(() => HistorialMedicoEntity, historial => historial.paciente)
  @JoinColumn()
  historialMedico: HistorialMedicoEntity;

  @OneToOne(() => RecetaMedicaEntity, { cascade: true }) // Relación 1 a 1 con Receta Médica
  @JoinColumn()
  recetaMedica: RecetaMedicaEntity;
}
