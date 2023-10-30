/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// medico.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicoController } from './medico.controller';
import { MedicoService } from './medico.service';
import { MedicoEntity } from './entities/medico.entity';
import { MedicoModel, MedicoSchema } from './model/medico.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([MedicoEntity]), // Para PostgreSQL
    MongooseModule.forFeature([{ name: 'Medico', schema: MedicoSchema }]), // Para MongoDB
  ],
  controllers: [MedicoController],
  providers: [MedicoService],
})
export class MedicoModule {}
