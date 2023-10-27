/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LicenciaService } from './licencia.service';
import { LicenciaController } from './licencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { LicenciaEntity } from './entities/licencia.entity';
import { LicenciaSchema } from './model/licencia.model';

@Module({
  imports: [
    // PostgreSQL Configuration
    TypeOrmModule.forFeature([LicenciaEntity]),
    
    // MongoDB Configuration
    MongooseModule.forFeature([{ name: 'Licencia', schema: LicenciaSchema  }]),
  ],
  controllers: [LicenciaController],
  providers: [LicenciaService],
})
export class LicenciaModule {}
