/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResultadoExamenEntity } from './entities/resultado-examan.entity';
import { ResultadoExamenModel } from './model/resultado-examen.model';

@Injectable()
export class ResultadoExamenService {
  constructor(
    @InjectRepository(ResultadoExamenEntity) // Inyección para TypeORM
    private resultadoExamenRepository: Repository<ResultadoExamenEntity>,
    @InjectModel('ResultadoExamen') // Inyección para Mongoose
    private resultadoExamenModel: Model<ResultadoExamenModel>,
  ) {}

  async create<T>(createResultadoExamenDto: any, database: string): Promise<T> {
    if (database === 'pg') {
      const newResultadoExamen = this.resultadoExamenRepository.create(createResultadoExamenDto);
      const savedResultadoExamen = await this.resultadoExamenRepository.save(newResultadoExamen);
      return savedResultadoExamen as T;
    } else if (database === 'mongo') {
      const newResultadoExamen = new this.resultadoExamenModel(createResultadoExamenDto);
      const savedResultadoExamen = await newResultadoExamen.save();
      return savedResultadoExamen as T;
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findOne<T>(id: string | number, database: string): Promise<T> {
    if (database === 'pg') {
      if (typeof id === 'string') {
        throw new BadRequestException('ID de Resultado de Examen no válido para PostgreSQL');
      }
      return this.resultadoExamenRepository.findOne({ where: { resultadoID: id } }) as T;
    } else if (database === 'mongo') {
      if (typeof id === 'number') {
        throw new BadRequestException('ID de Resultado de Examen no válido para MongoDB');
      }
      return this.resultadoExamenModel.findById(id).exec() as T;
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async update<T>(id: string | number, updateResultadoExamenDto: any, database: string): Promise<T> {
    const existingResultadoExamen = await this.findOne<T>(id, database);
    if (!existingResultadoExamen) {
      throw new NotFoundException('Resultado de Examen no encontrado');
    }

    if (database === 'pg') {
      await this.resultadoExamenRepository.update(id, updateResultadoExamenDto);
    } else if (database === 'mongo') {
      await this.resultadoExamenModel.findByIdAndUpdate(id, updateResultadoExamenDto).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }

    return this.findOne<T>(id, database);
  }

  async remove(id: string | number, database: string): Promise<void> {
    const existingResultadoExamen = await this.findOne<any>(id, database);
    if (!existingResultadoExamen) {
      throw new NotFoundException('Resultado de Examen no encontrado');
    }

    if (database === 'pg') {
      await this.resultadoExamenRepository.delete(id);
    } else if (database === 'mongo') {
      await this.resultadoExamenModel.findByIdAndRemove(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findAll<T>(database: string): Promise<T[]> {
    if (database === 'pg') {
      return this.resultadoExamenRepository.find() as unknown as T[];
    } else if (database === 'mongo') {
      return this.resultadoExamenModel.find().exec() as unknown as T[];
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }
}
