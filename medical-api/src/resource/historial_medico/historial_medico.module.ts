/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HistorialMedicoService } from './historial_medico.service';
import { HistorialMedicoController } from './historial_medico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { HistorialMedicoEntity } from './entities/historial_medico.entity';
import { HistorialMedicoSchema } from './model/historial-medico.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([HistorialMedicoEntity]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'HistorialMedico', schema: HistorialMedicoSchema }]), // Para MongoDB
  ],
  controllers: [HistorialMedicoController],
  providers: [HistorialMedicoService],
})
export class HistorialMedicoModule {}
