import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PacienteEntity } from './entities/paciente.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(PacienteEntity)
    private pacienteRepositoryPG: Repository<PacienteEntity>,
    @InjectModel('Paciente')
    private pacienteModelMongo: Model<PacienteEntity>,
  ) {}

  // Funciones comunes para ambas bases de datos
  async create(paciente: PacienteEntity): Promise<PacienteEntity> {
    if (process.env.DB_TYPE === 'pg') {
      return this.pacienteRepositoryPG.save(paciente);
    } else if (process.env.DB_TYPE === 'mongo') {
      const createdPaciente = new this.pacienteModelMongo(paciente);
      return createdPaciente.save();
    }
  }

  async findAll(): Promise<PacienteEntity[]> {
    if (process.env.DB_TYPE === 'pg') {
      return this.pacienteRepositoryPG.find();
    } else if (process.env.DB_TYPE === 'mongo') {
      return this.pacienteModelMongo.find().exec();
    }
  }

  async findOne(id: number): Promise<PacienteEntity> {
    if (process.env.DB_TYPE === 'pg') {
      return this.pacienteRepositoryPG.findOne(id);
    } else if (process.env.DB_TYPE === 'mongo') {
      return this.pacienteModelMongo.findById(id).exec();
    }
  }

  async update(id: number, paciente: PacienteEntity): Promise<PacienteEntity> {
    if (process.env.DB_TYPE === 'pg') {
      await this.pacienteRepositoryPG.update(id, paciente);
      return this.pacienteRepositoryPG.findOne(id);
    } else if (process.env.DB_TYPE === 'mongo') {
      return this.pacienteModelMongo.findByIdAndUpdate(id, paciente, { new: true }).exec();
    }
  }

  async remove(id: number): Promise<void> {
    if (process.env.DB_TYPE === 'pg') {
      await this.pacienteRepositoryPG.delete(id);
    } else if (process.env.DB_TYPE === 'mongo') {
      await this.pacienteModelMongo.findByIdAndRemove(id).exec();
    }
  }
}
