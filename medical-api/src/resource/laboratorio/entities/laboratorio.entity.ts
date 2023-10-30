/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { ResultadoExamenEntity } from '../../resultado-examen/entities/resultado-examan.entity';
import { MedicoEntity } from '../../medico/entities/medico.entity'

@Entity()
export class LaboratorioEntity {
  @PrimaryGeneratedColumn()
  laboratorioID: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @OneToMany(() => ResultadoExamenEntity, (resultadoExamen) => resultadoExamen.laboratorio) // Relación 1 a muchos con Resultado de Examen
  resultadosExamenes: ResultadoExamenEntity[];

  @OneToMany(() => MedicoEntity, (medicos) => medicos.laboratorios) // Relación 1 a muchos con Médico
  medicos: MedicoEntity[];
}
