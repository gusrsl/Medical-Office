/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LaboratorioEntity } from './entities/laboratorio.entity'; // Entity de PostgreSQL
import { LaboratorioModel } from './models/laboratorio.model'; // Model de MongoDB

@Injectable()
export class LaboratorioService {
  constructor(
    @InjectRepository(LaboratorioEntity) // Inyección para TypeORM (PostgreSQL)
    private laboratorioRepository: Repository<LaboratorioEntity>,
    @InjectModel('Laboratorio') // Inyección para Mongoose (MongoDB)
    private laboratorioModel: Model<LaboratorioModel>,
  ) {}

  async create<T>(createLaboratorioDto: any, database: string): Promise<T> {
    if (database === 'pg') {
      const newLaboratorio = this.laboratorioRepository.create(createLaboratorioDto);
      const savedLaboratorio = await this.laboratorioRepository.save(newLaboratorio);
      return savedLaboratorio as T;
    } else if (database === 'mongo') {
      const newLaboratorio = new this.laboratorioModel(createLaboratorioDto);
      const savedLaboratorio = await newLaboratorio.save();
      return savedLaboratorio as T;
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findOne(id: string | number, database: string): Promise<LaboratorioEntity | LaboratorioModel> {
    if (database === 'pg') {
      if (typeof id === 'string') {
        throw new BadRequestException('ID de Laboratorio no válido para PostgreSQL');
      }
      return this.laboratorioRepository.findOne({ where: { laboratorioID: id } });
    } else if (database === 'mongo') {
      if (typeof id === 'number') {
        throw new BadRequestException('ID de Laboratorio no válido para MongoDB');
      }
      return this.laboratorioModel.findById(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async update(id: string | number, updateLaboratorioDto: any, database: string): Promise<LaboratorioEntity | LaboratorioModel> {
    const existingLaboratorio = await this.findOne(id, database);
    if (!existingLaboratorio) {
      throw new NotFoundException('Laboratorio no encontrado');
    }

    if (database === 'pg') {
      await this.laboratorioRepository.update(id, updateLaboratorioDto);
    } else if (database === 'mongo') {
      await this.laboratorioModel.findByIdAndUpdate(id, updateLaboratorioDto).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }

    return this.findOne(id, database);
  }

  async remove(id: string | number, database: string): Promise<void> {
    const existingLaboratorio = await this.findOne(id, database);
    if (!existingLaboratorio) {
      throw new NotFoundException('Laboratorio no encontrado');
    }

    if (database === 'pg') {
      await this.laboratorioRepository.delete(id);
    } else if (database === 'mongo') {
      await this.laboratorioModel.findByIdAndRemove(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findAll(database: string): Promise<LaboratorioEntity[] | LaboratorioModel[]> {
    if (database === 'pg') {
      return this.laboratorioRepository.find();
    } else if (database === 'mongo') {
      return this.laboratorioModel.find().exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }
}
