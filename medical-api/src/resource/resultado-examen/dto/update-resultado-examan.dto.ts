import { PartialType } from '@nestjs/mapped-types';
import { CreateResultadoExamanDto } from './create-resultado-examan.dto';

export class UpdateResultadoExamanDto extends PartialType(CreateResultadoExamanDto) {}
