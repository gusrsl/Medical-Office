/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MedicamentoEntity } from './entities/medicamento.entity';
import { MedicamentoModel } from './model/medicamento.model';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { TypeOrmModule } from '@nestjs/typeorm';

@Injectable()
export class MedicamentoService {
  constructor(
    @InjectRepository(MedicamentoEntity) // Inyección para TypeORM
    private medicamentoRepository: Repository<MedicamentoEntity>,
    @InjectModel('Medicamento') // Inyección para Mongoose
    private medicamentoModel: Model<MedicamentoModel>,
  ) {}

  async create(createMedicamentoDto: CreateMedicamentoDto, database: string): Promise<MedicamentoEntity | MedicamentoModel> {
    if (database === 'pg') {
      const newMedicamento = this.medicamentoRepository.create(createMedicamentoDto);
      return this.medicamentoRepository.save(newMedicamento);
    } else if (database === 'mongo') {
      const newMedicamento = new this.medicamentoModel(createMedicamentoDto);
      return newMedicamento.save();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findOne(id: string | number, database: string): Promise<MedicamentoEntity | MedicamentoModel> {
    if (database === 'pg') {
      if (typeof id === 'string') {
        throw new BadRequestException('ID de Paciente no válido para PostgreSQL');
      }
  
      return this.medicamentoRepository.findOne({ where: { id: id } });
    } else if (database === 'mongo') {
      if (typeof id === 'number') {
        throw new BadRequestException('ID de Paciente no válido para MongoDB');
      }
  
      return this.medicamentoModel.findById(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async update(id: string | number, updateMedicamentoDto: CreateMedicamentoDto, database: string): Promise<MedicamentoEntity | MedicamentoModel> {
    const existingMedicamento = await this.findOne(id, database);
    if (!existingMedicamento) {
      throw new NotFoundException('Medicamento no encontrado');
    }

    if (database === 'pg') {
      await this.medicamentoRepository.update(id, updateMedicamentoDto);
    } else if (database === 'mongo') {
      await this.medicamentoModel.findByIdAndUpdate(id, updateMedicamentoDto).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }

    return this.findOne(id, database);
  }

  async remove(id: string | number, database: string): Promise<void> {
    const existingMedicamento = await this.findOne(id, database);
    if (!existingMedicamento) {
      throw new NotFoundException('Medicamento no encontrado');
    }

    if (database === 'pg') {
      await this.medicamentoRepository.delete(id);
    } else if (database === 'mongo') {
      await this.medicamentoModel.findByIdAndRemove(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findAll(database: string): Promise<MedicamentoEntity[] | MedicamentoModel[]> {
    if (database === 'pg') {
      return this.medicamentoRepository.find();
    } else if (database === 'mongo') {
      return this.medicamentoModel.find().exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }
}

