/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LicenciaEntity } from './entities/licencia.entity';
import { LicenciaModel } from './model/licencia.model';
import { CreateLicenciaDto } from './dto/create-licencia.dto';

@Injectable()
export class LicenciaService {
  constructor(
    @InjectRepository(LicenciaEntity) // Inyección para TypeORM
    private licenciaRepository: Repository<LicenciaEntity>,
    @InjectModel('Licencia') // Inyección para Mongoose
    private licenciaModel: Model<LicenciaModel>,
  ) {}

  async create(createLicenciaDto: CreateLicenciaDto, database: string): Promise<LicenciaEntity | LicenciaModel> {
    if (database === 'pg') {
      const newLicencia = this.licenciaRepository.create(createLicenciaDto);
      return this.licenciaRepository.save(newLicencia);
    } else if (database === 'mongo') {
      const newLicencia = new this.licenciaModel(createLicenciaDto);
      return newLicencia.save();
    } else {
      throw new Error('Base de datos no válida');
    }
  }

  async findOne(id: string | number, database: string): Promise<LicenciaEntity | LicenciaModel> {
    if (database === 'pg') {
      if (typeof id === 'string') {
        throw new Error('ID de Licencia no válido para PostgreSQL');
      }

      return this.licenciaRepository.findOne({ where: { id: id } });
    } else if (database === 'mongo') {
      if (typeof id === 'number') {
        throw new Error('ID de Licencia no válido para MongoDB');
      }

      return this.licenciaModel.findById(id).exec();
    } else {
      throw new Error('Base de datos no válida');
    }
  }

  async update(id: string | number, updateLicenciaDto: CreateLicenciaDto, database: string): Promise<LicenciaEntity | LicenciaModel> {
    const existingLicencia = await this.findOne(id, database);
    if (!existingLicencia) {
      throw new Error('Licencia no encontrada');
    }

    if (database === 'pg') {
      await this.licenciaRepository.update(id, updateLicenciaDto);
    } else if (database === 'mongo') {
      await this.licenciaModel.findByIdAndUpdate(id, updateLicenciaDto).exec();
    } else {
      throw new Error('Base de datos no válida');
    }

    return this.findOne(id, database);
  }

  async remove(id: string | number, database: string): Promise<void> {
    const existingLicencia = await this.findOne(id, database);
    if (!existingLicencia) {
      throw new Error('Licencia no encontrada');
    }

    if (database === 'pg') {
      await this.licenciaRepository.delete(id);
    } else if (database === 'mongo') {
      await this.licenciaModel.findByIdAndRemove(id).exec();
    } else {
      throw new Error('Base de datos no válida');
    }
  }

  async findAll(database: string): Promise<LicenciaEntity[] | LicenciaModel[]> {
    if (database === 'pg') {
      return this.licenciaRepository.find();
    } else if (database === 'mongo') {
      return this.licenciaModel.find().exec();
    } else {
      throw new Error('Base de datos no válida');
    }
  }
}
