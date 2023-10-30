/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LaboratorioService } from './laboratorio.service';
import { LaboratorioController } from './laboratorio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { LaboratorioEntity } from './entities/laboratorio.entity';
import { LaboratorioSchema } from './models/laboratorio.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([LaboratorioEntity]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'Laboratorio', schema: LaboratorioSchema }]), // Para MongoDB
  ],
  controllers: [LaboratorioController],
  providers: [LaboratorioService],
})
export class LaboratorioModule {}
