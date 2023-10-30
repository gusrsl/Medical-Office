/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CitaEntity } from './entities/cita.entity';
import { CitaModel } from './model/cita.model';
import { CreateCitaDto } from './dto/create-cita.dto';
import { NotifiiGateway } from 'src/websocket/notifii/notifii.gateway';

@Injectable()
export class CitaService {
  constructor(
    @InjectRepository(CitaEntity) // Inyección para TypeORM
    private citaRepository: Repository<CitaEntity>,
    @InjectModel('Cita') // Inyección para Mongoose
    private citaModel: Model<CitaModel>,
    private notifiiGateway: NotifiiGateway, // Inyecta el gateway

  ) {}

  async create(createCitaDto: CreateCitaDto, database: string): Promise<CitaEntity | CitaModel> {
    if (database === 'pg') {
      const newCita = this.citaRepository.create(createCitaDto);
      const savedCita = await this.citaRepository.save(newCita);

      // Envía una notificación al paciente utilizando el gateway de notificaciones
      const pacienteID = createCitaDto.pacienteID.toString();
      this.notifiiGateway.sendNotificationToPatient(pacienteID, 'Nueva cita médica agendada');

      return savedCita;
    } else if (database === 'mongo') {
      const newCita = new this.citaModel(createCitaDto);
      const savedCita = await newCita.save();

      // Envía una notificación al paciente utilizando el gateway de notificaciones
      const pacienteID = createCitaDto.pacienteID.toString();
      this.notifiiGateway.sendNotificationToPatient(pacienteID, 'Nueva cita médica agendada');

      return savedCita;
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findOne(id: string | number, database: string): Promise<CitaEntity | CitaModel> {
    if (database === 'pg') {
      if (typeof id === 'string') {
        throw new BadRequestException('ID de Cita no válido para PostgreSQL');
      }
      return this.citaRepository.findOne({ where: { citaID: id } });
    } else if (database === 'mongo') {
      if (typeof id === 'number') {
        throw new BadRequestException('ID de Cita no válido para MongoDB');
      }
      return this.citaModel.findById(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async update(id: string | number, updateCitaDto: CreateCitaDto, database: string): Promise<CitaEntity | CitaModel> {
    const existingCita = await this.findOne(id, database);
    if (!existingCita) {
      throw new NotFoundException('Cita no encontrada');
    }

    if (database === 'pg') {
      await this.citaRepository.update(id, updateCitaDto);
    } else if (database === 'mongo') {
      await this.citaModel.findByIdAndUpdate(id, updateCitaDto).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }

    return this.findOne(id, database);
  }

  async remove(id: string | number, database: string): Promise<void> {
    const existingCita = await this.findOne(id, database);
    if (!existingCita) {
      throw new NotFoundException('Cita no encontrada');
    }

    if (database === 'pg') {
      await this.citaRepository.delete(id);
    } else if (database === 'mongo') {
      await this.citaModel.findByIdAndRemove(id).exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }

  async findAll(database: string): Promise<CitaEntity[] | CitaModel[]> {
    if (database === 'pg') {
      return this.citaRepository.find();
    } else if (database === 'mongo') {
      return this.citaModel.find().exec();
    } else {
      throw new BadRequestException('Base de datos no válida');
    }
  }
}
