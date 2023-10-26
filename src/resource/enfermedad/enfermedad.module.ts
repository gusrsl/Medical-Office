import { Module } from '@nestjs/common';
import { EnfermedadService } from './enfermedad.service';
import { EnfermedadController } from './enfermedad.controller';

@Module({
  controllers: [EnfermedadController],
  providers: [EnfermedadService],
})
export class EnfermedadModule {}
