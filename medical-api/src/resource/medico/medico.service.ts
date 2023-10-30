/* eslint-disable prettier/prettier */
// medico.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MedicoEntity } from './entities/medico.entity';
import { MedicoModel } from './model/medico.model';
import { CreateMedicoDto } from './dto/create-medico.dto';

@Injectable()
export class MedicoService {
  constructor(
    @InjectRepository(MedicoEntity) // Inyección para TypeORM
    private medicoRepository: Repository<MedicoEntity>,
    @InjectModel('Medico') // Inyección para Mongoose
    private medicoModel: Model<MedicoModel>,
  ) {}

  async create(createMedicoDto: CreateMedicoDto, database: string): Promise<MedicoEntity | MedicoModel> {
    if (database === 'pg') {
      const newMedico = this.medicoRepository.create(createMedicoDto);
      return this.medicoRepository.save(newMedico);
    } else if (database === 'mongo') {
      const newMedico = new this.medicoModel(createMedicoDto);
      return newMedico.save();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findOne(id: string | number, database: string): Promise<MedicoEntity | MedicoModel> {
    if (database === 'pg') {
      if (typeof id === 'string') {
        throw new BadRequestException('ID de Medico no válido para PostgreSQL');
      }

      return this.medicoRepository.findOne({ where: { id: id } });
    } else if (database === 'mongo') {
      if (typeof id === 'number') {
        throw new BadRequestException('ID de Medico no válido para MongoDB');
      }
      return this.medicoModel.findById(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async update(id: string | number, updateMedicoDto: CreateMedicoDto, database: string): Promise<MedicoEntity | MedicoModel> {
    const existingMedico = await this.findOne(id, database);
    if (!existingMedico) {
      throw new NotFoundException('Medico no encontrado');
    }

    if (database === 'pg') {
      await this.medicoRepository.update(id, updateMedicoDto);
    } else if (database === 'mongo') {
      await this.medicoModel.findByIdAndUpdate(id, updateMedicoDto).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }

    return this.findOne(id, database);
  }

  async remove(id: string | number, database: string): Promise<void> {
    const existingMedico = await this.findOne(id, database);
    if (!existingMedico) {
      throw new NotFoundException('Medico no encontrado');
    }

    if (database === 'pg') {
      await this.medicoRepository.delete(id);
    } else if (database === 'mongo') {
      await this.medicoModel.findByIdAndRemove(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findAll(database: string): Promise<MedicoEntity[] | MedicoModel[]> {
    if (database === 'pg') {
      return this.medicoRepository.find();
    } else if (database === 'mongo') {
      return this.medicoModel.find().exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }
}
