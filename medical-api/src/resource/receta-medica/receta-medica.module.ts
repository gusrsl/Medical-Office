/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RecetaMedicaService } from './receta-medica.service';
import { RecetaMedicaController } from './receta-medica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetaMedicaEntity } from './entities/receta-medica.entity';
import { RecetaMedicaSchema } from './model/receta-medica.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecetaMedicaEntity]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'RecetaMedica', schema: RecetaMedicaSchema }]), // Para MongoDB
  ],
  controllers: [RecetaMedicaController],
  providers: [RecetaMedicaService],
})
export class RecetaMedicaModule {}
