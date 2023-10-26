import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialMedicoDto } from './create-historial_medico.dto';

export class UpdateHistorialMedicoDto extends PartialType(CreateHistorialMedicoDto) {}
