import { Injectable } from '@nestjs/common';
import { CreateHistorialMedicoDto } from './dto/create-historial_medico.dto';
import { UpdateHistorialMedicoDto } from './dto/update-historial_medico.dto';

@Injectable()
export class HistorialMedicoService {
  create(createHistorialMedicoDto: CreateHistorialMedicoDto) {
    return 'This action adds a new historialMedico';
  }

  findAll() {
    return `This action returns all historialMedico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historialMedico`;
  }

  update(id: number, updateHistorialMedicoDto: UpdateHistorialMedicoDto) {
    return `This action updates a #${id} historialMedico`;
  }

  remove(id: number) {
    return `This action removes a #${id} historialMedico`;
  }
}
