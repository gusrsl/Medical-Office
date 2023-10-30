/* eslint-disable prettier/prettier */
// cita.module.ts
import { Module } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CitaController } from './cita.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { CitaEntity } from './entities/cita.entity';
import { CitaSchema } from './model/cita.model';
import { NotifiiModule } from '../../websocket/notifii/notifii.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CitaEntity]),
    MongooseModule.forFeature([{ name: 'Cita', schema: CitaSchema }]),
    NotifiiModule
  ],
  controllers: [CitaController],
  providers: [CitaService],
})
export class CitaModule {}
