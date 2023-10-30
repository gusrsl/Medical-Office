/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ResultadoExamenService } from './resultado-examen.service';
import { ResultadoExamenController } from './resultado-examen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultadoExamenEntity } from './entities/resultado-examan.entity';
import { ResultadoExamenSchema } from './model/resultado-examen.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([ResultadoExamenEntity]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'ResultadoExamen', schema: ResultadoExamenSchema }]), // Para MongoDB
  ],
  controllers: [ResultadoExamenController],
  providers: [ResultadoExamenService],
})
export class ResultadoExamenModule {}
