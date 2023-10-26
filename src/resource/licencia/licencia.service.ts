import { Injectable } from '@nestjs/common';
import { CreateLicenciaDto } from './dto/create-licencia.dto';
import { UpdateLicenciaDto } from './dto/update-licencia.dto';

@Injectable()
export class LicenciaService {
  create(createLicenciaDto: CreateLicenciaDto) {
    return 'This action adds a new licencia';
  }

  findAll() {
    return `This action returns all licencia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} licencia`;
  }

  update(id: number, updateLicenciaDto: UpdateLicenciaDto) {
    return `This action updates a #${id} licencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} licencia`;
  }
}
