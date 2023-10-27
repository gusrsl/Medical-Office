/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// paciente.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PacienteEntity } from './entities/paciente.entity';
import { PacienteModel } from './model/paciente.model';
import { CreatePacienteDto } from './dto/create-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(PacienteEntity) // Inyección para TypeORM
    private pacienteRepository: Repository<PacienteEntity>,
    @InjectModel('Paciente') // Inyección para Mongoose
    private pacienteModel: Model<PacienteModel>,
  ) {}

  async create(createPacienteDto: CreatePacienteDto, database: string): Promise<PacienteEntity | PacienteModel> {
    if (database === 'pg') {
      const newPaciente = this.pacienteRepository.create(createPacienteDto);
      return this.pacienteRepository.save(newPaciente);
    } else if (database === 'mongo') {
      const newPaciente = new this.pacienteModel(createPacienteDto);
      return newPaciente.save();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findOne(id: string | number, database: string): Promise<PacienteEntity | PacienteModel> {
    if (database === 'pg') {
      if (typeof id === 'string') {
        throw new BadRequestException('ID de Paciente no válido para PostgreSQL');
      }
      return this.pacienteRepository.findOne({ where: { id } });
    } else if (database === 'mongo') {
      if (typeof id === 'number') {
        throw new BadRequestException('ID de Paciente no válido para MongoDB');
      }
      return this.pacienteModel.findById(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async update(id: string | number, updatePacienteDto: CreatePacienteDto, database: string): Promise<PacienteEntity | PacienteModel> {
    const existingPaciente = await this.findOne(id, database);
    if (!existingPaciente) {
      throw new NotFoundException('Paciente no encontrado');
    }

    if (database === 'pg') {
      await this.pacienteRepository.update(id, updatePacienteDto);
    } else if (database === 'mongo') {
      await this.pacienteModel.findByIdAndUpdate(id, updatePacienteDto).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }

    return this.findOne(id, database);
  }

  async remove(id: string | number, database: string): Promise<void> {
    const existingPaciente = await this.findOne(id, database);
    if (!existingPaciente) {
      throw new NotFoundException('Paciente no encontrado');
    }

    if (database === 'pg') {
      await this.pacienteRepository.delete(id);
    } else if (database === 'mongo') {
      await this.pacienteModel.findByIdAndRemove(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findAll(database: string[]): Promise<any> {
    const results: any = {};

    if (database.includes('pg')) {
      results.pgData = await this.pacienteRepository.find();
    }

    if (database.includes('mongo')) {
      results.mongoData = await this.pacienteModel.find().exec();
    }

    if (results.pgData || results.mongoData) {
      return results;
    }

    throw new BadRequestException('Base de datos no válida');
  }
}
