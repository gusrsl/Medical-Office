/* eslint-disable prettier/prettier */
// consultorio.service.ts

import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsultorioEntity } from './entities/consultorio.entity';
import { ConsultorioModel } from './model/consultorio.model';
import { CreateConsultorioDto } from './dto/create-consultorio.dto';

@Injectable()
export class ConsultorioService {
  constructor(
    @InjectRepository(ConsultorioEntity) private consultorioRepository: Repository<ConsultorioEntity>,
    @InjectModel('Consultorio') private consultorioModel: Model<ConsultorioModel>,
  ) {}

  async create(createConsultorioDto: CreateConsultorioDto, database: string): Promise<ConsultorioEntity | ConsultorioModel> {
    if (database === 'pg') {
      const newConsultorio = this.consultorioRepository.create(createConsultorioDto);
      return this.consultorioRepository.save(newConsultorio);
    } else if (database === 'mongo') {
      const newConsultorio = new this.consultorioModel(createConsultorioDto);
      return newConsultorio.save();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findOne(id: string | number, database: string): Promise<ConsultorioEntity | ConsultorioModel> {
    if (database === 'pg') {
      if (typeof id === 'string') {
        throw new BadRequestException('ID de Consultorio no válido para PostgreSQL');
      }

      return this.consultorioRepository.findOne({ where: { id: id } });
    } else if (database === 'mongo') {
      if (typeof id === 'number') {
        throw new BadRequestException('ID de Consultorio no válido para MongoDB');
      }

      return this.consultorioModel.findById(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async update(id: string | number, updateConsultorioDto: CreateConsultorioDto, database: string): Promise<ConsultorioEntity | ConsultorioModel> {
    const existingConsultorio = await this.findOne(id, database);
    if (!existingConsultorio) {
      throw new NotFoundException('Consultorio no encontrado');
    }

    if (database === 'pg') {
      await this.consultorioRepository.update(id, updateConsultorioDto);
    } else if (database === 'mongo') {
      await this.consultorioModel.findByIdAndUpdate(id, updateConsultorioDto).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }

    return this.findOne(id, database);
  }

  async remove(id: string | number, database: string): Promise<void> {
    const existingConsultorio = await this.findOne(id, database);
    if (!existingConsultorio) {
      throw new NotFoundException('Consultorio no encontrado');
    }

    if (database === 'pg') {
      await this.consultorioRepository.delete(id);
    } else if (database === 'mongo') {
      await this.consultorioModel.findByIdAndRemove(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findAll(database: string[]): Promise<any> {
    if (database.includes('pg') && database.includes('mongo')) {
      const [pgData, mongoData] = await Promise.all([
        this.consultorioRepository.find(),
        this.consultorioModel.find().exec(),
      ]);
      return {
        pgData,
        mongoData,
      };
    } else if (database.includes('pg')) {
      return this.consultorioRepository.find();
    } else if (database.includes('mongo')) {
      return this.consultorioModel.find().exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }
}
