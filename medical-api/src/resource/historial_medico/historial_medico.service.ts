/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HistorialMedicoEntity } from './entities/historial_medico.entity';
import { HistorialMedicoModel } from './model/historial-medico.model';
import { CreateHistorialMedicoDto } from './dto/create-historial_medico.dto';

@Injectable()
export class HistorialMedicoService {
  constructor(
    @InjectRepository(HistorialMedicoEntity) // Inyección para TypeORM
    private historialMedicoRepository: Repository<HistorialMedicoEntity>,
    @InjectModel('HistorialMedico') // Inyección para Mongoose
    private historialMedicoModel: Model<HistorialMedicoModel>,
  ) {}

  async create(createHistorialMedicoDto: CreateHistorialMedicoDto, database: string): Promise<HistorialMedicoEntity | HistorialMedicoModel> {
    if (database === 'pg') {
      const newHistorialMedico = this.historialMedicoRepository.create(createHistorialMedicoDto);
      return this.historialMedicoRepository.save(newHistorialMedico);
    } else if (database === 'mongo') {
      const newHistorialMedico = new this.historialMedicoModel(createHistorialMedicoDto);
      return newHistorialMedico.save();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findOne(id: string | number, database: string): Promise<HistorialMedicoEntity | HistorialMedicoModel> {
    if (database === 'pg') {
      if (typeof id === 'string') {
        throw new BadRequestException('ID de Historial Médico no válido para PostgreSQL');
      }
      return this.historialMedicoRepository.findOne({ where: { historialID: id } });
    } else if (database === 'mongo') {
      if (typeof id === 'number') {
        throw new BadRequestException('ID de Historial Médico no válido para MongoDB');
      }
      return this.historialMedicoModel.findById(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async update(id: string | number, updateHistorialMedicoDto: CreateHistorialMedicoDto, database: string): Promise<HistorialMedicoEntity | HistorialMedicoModel> {
    const existingHistorialMedico = await this.findOne(id, database);
    if (!existingHistorialMedico) {
      throw new NotFoundException('Historial Médico no encontrado');
    }

    if (database === 'pg') {
      await this.historialMedicoRepository.update(id, updateHistorialMedicoDto);
    } else if (database === 'mongo') {
      await this.historialMedicoModel.findByIdAndUpdate(id, updateHistorialMedicoDto).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }

    return this.findOne(id, database);
  }

  async remove(id: string | number, database: string): Promise<void> {
    const existingHistorialMedico = await this.findOne(id, database);
    if (!existingHistorialMedico) {
      throw new NotFoundException('Historial Médico no encontrado');
    }

    if (database === 'pg') {
      await this.historialMedicoRepository.delete(id);
    } else if (database === 'mongo') {
      await this.historialMedicoModel.findByIdAndRemove(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findAll(database: string): Promise<HistorialMedicoEntity[] | HistorialMedicoModel[]> {
    if (database === 'pg') {
      return this.historialMedicoRepository.find();
    } else if (database === 'mongo') {
      return this.historialMedicoModel.find().exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }
}
