/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EnfermedadEntity } from './entities/enfermedad.entity';
import { EnfermedadModel } from './model/enfermedad.model';
import { CreateEnfermedadDto } from './dto/create-enfermedad.dto';

@Injectable()
export class EnfermedadService {
  constructor(
    @InjectRepository(EnfermedadEntity) // Inyección para TypeORM
    private enfermedadRepository: Repository<EnfermedadEntity>,
    @InjectModel('Enfermedad') // Inyección para Mongoose
    private enfermedadModel: Model<EnfermedadModel>,
  ) {}

  async create(createEnfermedadDto: CreateEnfermedadDto, database: string): Promise<EnfermedadEntity | EnfermedadModel> {
    if (database === 'pg') {
      const newEnfermedad = this.enfermedadRepository.create(createEnfermedadDto);
      return this.enfermedadRepository.save(newEnfermedad);
    } else if (database === 'mongo') {
      const newEnfermedad = new this.enfermedadModel(createEnfermedadDto);
      return newEnfermedad.save();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findOne(id: string | number, database: string): Promise<EnfermedadEntity | EnfermedadModel> {
    if (database === 'pg') {
      if (typeof id === 'string') {
        throw new BadRequestException('ID de Enfermedad no válido para PostgreSQL');
      }

      return this.enfermedadRepository.findOne({ where: { enfermedadID: id } });
    } else if (database === 'mongo') {
      if (typeof id === 'number') {
        throw new BadRequestException('ID de Enfermedad no válido para MongoDB');
      }

      return this.enfermedadModel.findById(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async update(id: string | number, updateEnfermedadDto: CreateEnfermedadDto, database: string): Promise<EnfermedadEntity | EnfermedadModel> {
    const existingEnfermedad = await this.findOne(id, database);
    if (!existingEnfermedad) {
      throw new NotFoundException('Enfermedad no encontrada');
    }

    if (database === 'pg') {
      await this.enfermedadRepository.update(id, updateEnfermedadDto);
    } else if (database === 'mongo') {
      await this.enfermedadModel.findByIdAndUpdate(id, updateEnfermedadDto).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }

    return this.findOne(id, database);
  }

  async remove(id: string | number, database: string): Promise<void> {
    const existingEnfermedad = await this.findOne(id, database);
    if (!existingEnfermedad) {
      throw new NotFoundException('Enfermedad no encontrada');
    }

    if (database === 'pg') {
      await this.enfermedadRepository.delete(id);
    } else if (database === 'mongo') {
      await this.enfermedadModel.findByIdAndRemove(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findAll(database: string): Promise<EnfermedadEntity[] | EnfermedadModel[]> {
    if (database === 'pg') {
      return this.enfermedadRepository.find();
    } else if (database === 'mongo') {
      return this.enfermedadModel.find().exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }
}
