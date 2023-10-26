import { Module } from '@nestjs/common';
import { LicenciaService } from './licencia.service';
import { LicenciaController } from './licencia.controller';

@Module({
  controllers: [LicenciaController],
  providers: [LicenciaService],
})
export class LicenciaModule {}
