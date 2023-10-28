import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MedicamentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;
}
