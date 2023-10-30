/* eslint-disable prettier/prettier */
// receta-medica.service.ts
// receta-medica.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RecetaMedicaEntity } from './entities/receta-medica.entity';
import { RecetaMedicaModel } from './model/receta-medica.model';

@Injectable()
export class RecetaMedicaService {
  constructor(
    @InjectRepository(RecetaMedicaEntity) // Inyección para TypeORM
    private recetaMedicaRepository: Repository<RecetaMedicaEntity>,
    @InjectModel('RecetaMedica') // Inyección para Mongoose
    private recetaMedicaModel: Model<RecetaMedicaModel>,
  ) {}

  async create(createRecetaMedicaDto: any, database: string): Promise<RecetaMedicaEntity | RecetaMedicaModel> {
    if (database === 'pg') {
      const newRecetaMedica = this.recetaMedicaRepository.create(createRecetaMedicaDto);
      const [savedRecetaMedica] = await this.recetaMedicaRepository.save(newRecetaMedica); // Usamos desestructuración para obtener la primera entidad
      return savedRecetaMedica;
    } else if (database === 'mongo') {
      const newRecetaMedica = new this.recetaMedicaModel(createRecetaMedicaDto);
      const savedRecetaMedica = await newRecetaMedica.save();
      return savedRecetaMedica;
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findOne(id: string | number, database: string): Promise<RecetaMedicaEntity | RecetaMedicaModel> {
    if (database === 'pg') {
      if (typeof id === 'string') {
        throw new BadRequestException('ID de Receta Médica no válido para PostgreSQL');
      }
      return this.recetaMedicaRepository.findOne({ where: { recetaID: id } });
    } else if (database === 'mongo') {
      if (typeof id === 'number') {
        throw new BadRequestException('ID de Receta Médica no válido para MongoDB');
      }
      return this.recetaMedicaModel.findById(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async update(id: string | number, updateRecetaMedicaDto: any, database: string): Promise<RecetaMedicaEntity | RecetaMedicaModel> {
    const existingRecetaMedica = await this.findOne(id, database);
    if (!existingRecetaMedica) {
      throw new NotFoundException('Receta Médica no encontrada');
    }

    if (database === 'pg') {
      await this.recetaMedicaRepository.update(id, updateRecetaMedicaDto);
    } else if (database === 'mongo') {
      await this.recetaMedicaModel.findByIdAndUpdate(id, updateRecetaMedicaDto).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }

    return this.findOne(id, database);
  }

  async remove(id: string | number, database: string): Promise<void> {
    const existingRecetaMedica = await this.findOne(id, database);
    if (!existingRecetaMedica) {
      throw new NotFoundException('Receta Médica no encontrada');
    }

    if (database === 'pg') {
      await this.recetaMedicaRepository.delete(id);
    } else if (database === 'mongo') {
      await this.recetaMedicaModel.findByIdAndRemove(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findAll(database: string): Promise<RecetaMedicaEntity[] | RecetaMedicaModel[]> {
    if (database === 'pg') {
      return this.recetaMedicaRepository.find();
    } else if (database === 'mongo') {
      return this.recetaMedicaModel.find().exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }
}
