/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';
import { MedicamentoController } from './medicamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicamentoEntity } from './entities/medicamento.entity';
import { MedicamentoSchema } from './model/medicamento.model';

@Module({
  imports: [
    // PostgreSQL Configuration
    TypeOrmModule.forFeature([MedicamentoEntity]),
    
    // MongoDB Configuration
    MongooseModule.forFeature([{ name: 'Medicamento', schema: MedicamentoSchema }]),
  ],
  controllers: [MedicamentoController],
  providers: [MedicamentoService],
})
export class MedicamentoModule {}
