import { Module } from '@nestjs/common';
import { ResultadoExamenService } from './resultado-examen.service';
import { ResultadoExamenController } from './resultado-examen.controller';

@Module({
  controllers: [ResultadoExamenController],
  providers: [ResultadoExamenService],
})
export class ResultadoExamenModule {}
