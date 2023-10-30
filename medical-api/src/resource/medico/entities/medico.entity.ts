/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { LicenciaEntity } from '../../licencia/entities/licencia.entity'; // Asegúrate de que los nombres de tus entidades coincidan
import { ConsultorioEntity } from '../../consultorio/entities/consultorio.entity'; // Asegúrate de que los nombres de tus entidades coincidan
import { CitaEntity } from '../../cita/entities/cita.entity';
import { HistorialMedicoEntity } from '../../historial_medico/entities/historial_medico.entity';
import { LaboratorioEntity } from 'src/resource/laboratorio/entities/laboratorio.entity';

@Entity()
export class MedicoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  especialidad: string;

  // Agrega las relaciones con Licencia y Consultorio
  @OneToOne(() => LicenciaEntity)
  @JoinColumn()
  licencias: LicenciaEntity;

  @ManyToMany(() => ConsultorioEntity)
  @JoinTable()
  consultorios: ConsultorioEntity[];

  @OneToMany(() => CitaEntity, (cita) => cita.medico)
  citas: CitaEntity[];

  @OneToMany(() => HistorialMedicoEntity, historial => historial.medicos)
  historialesMedicos: HistorialMedicoEntity[];

  @OneToMany(() => LaboratorioEntity, (laboratorio) => laboratorio.medicos)
  laboratorios: LaboratorioEntity[];

}
