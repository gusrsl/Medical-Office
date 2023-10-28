/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class LicenciaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numeroLicencia: string;
}
