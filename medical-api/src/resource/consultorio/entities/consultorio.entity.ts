/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// consultorio.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { MedicoEntity } from '../../medico/entities/medico.entity'; // Asegúrate de que los nombres de tus entidades coincidan

@Entity()
export class ConsultorioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nombre_Consultorio: string;

  @Column()
  Direccion: string;

  @ManyToMany(() => MedicoEntity, medico => medico.consultorios)
  medicos: MedicoEntity[];
}


