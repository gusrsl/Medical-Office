/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { PacienteEntity } from './entities/paciente.entity';
import { PacienteSchema } from './model/paciente.model';

@Module({
  imports: [
    // PostgreSQL Configuration
    TypeOrmModule.forFeature([PacienteEntity]),
    
    // MongoDB Configuration
    MongooseModule.forFeature([{ name: 'Paciente', schema: PacienteSchema  }]),
  ],
  controllers: [PacienteController],
  providers: [PacienteService],
})
export class PacienteModule {}
