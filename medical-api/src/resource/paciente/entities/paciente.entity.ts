/* eslint-disable prettier/prettier */
// paciente.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  // Otras propiedades específicas de PostgreSQL
}
