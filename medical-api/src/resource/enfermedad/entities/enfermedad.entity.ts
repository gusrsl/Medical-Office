/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('enfermedad')
export class EnfermedadEntity {
  @PrimaryGeneratedColumn()
  enfermedadID: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;
}