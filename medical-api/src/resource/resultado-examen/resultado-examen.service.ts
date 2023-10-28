import { Injectable } from '@nestjs/common';
import { CreateResultadoExamanDto } from './dto/create-resultado-examan.dto';
import { UpdateResultadoExamanDto } from './dto/update-resultado-examan.dto';

@Injectable()
export class ResultadoExamenService {
  create(createResultadoExamanDto: CreateResultadoExamanDto) {
    return 'This action adds a new resultadoExaman';
  }

  findAll() {
    return `This action returns all resultadoExamen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resultadoExaman`;
  }

  update(id: number, updateResultadoExamanDto: UpdateResultadoExamanDto) {
    return `This action updates a #${id} resultadoExaman`;
  }

  remove(id: number) {
    return `This action removes a #${id} resultadoExaman`;
  }
}
