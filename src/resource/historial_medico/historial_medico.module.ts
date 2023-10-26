import { Module } from '@nestjs/common';
import { HistorialMedicoService } from './historial_medico.service';
import { HistorialMedicoController } from './historial_medico.controller';

@Module({
  controllers: [HistorialMedicoController],
  providers: [HistorialMedicoService],
})
export class HistorialMedicoModule {}
