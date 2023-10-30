/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConsultorioService } from './consultorio.service';
import { ConsultorioController } from './consultorio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsultorioEntity } from './entities/consultorio.entity';
import { ConsultorioSchema } from './model/consultorio.model';

@Module({
  imports: [
    // PostgreSQL Configuration
    TypeOrmModule.forFeature([ConsultorioEntity]),
    
    // MongoDB Configuration
    MongooseModule.forFeature([{ name: 'Consultorio', schema: ConsultorioSchema  }]),
  ],
  controllers: [ConsultorioController],
  providers: [ConsultorioService],
})
export class ConsultorioModule {}
