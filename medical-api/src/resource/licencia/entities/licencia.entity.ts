/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { MedicoEntity } from '../../medico/entities/medico.entity'; // Asegúrate de que los nombres de tus entidades coincidan

@Entity()
export class LicenciaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numeroLicencia: string;

  @OneToOne(() => MedicoEntity, medico => medico.licencias)
  medico: MedicoEntity;
}