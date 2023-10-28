/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EnfermedadService } from './enfermedad.service';
import { EnfermedadController } from './enfermedad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { EnfermedadEntity } from './entities/enfermedad.entity';
import { EnfermedadSchema } from './model/enfermedad.model';

@Module({
  imports: [
    // PostgreSQL Configuration
    TypeOrmModule.forFeature([EnfermedadEntity]),
    
    // MongoDB Configuration
    MongooseModule.forFeature([{ name: 'Enfermedad', schema: EnfermedadSchema   }]),
  ],
  controllers: [EnfermedadController],
  providers: [EnfermedadService],
})
export class EnfermedadModule {}
