/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, Query, ParseIntPipe } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';
import { MedicamentoEntity } from './entities/medicamento.entity';
import { MedicamentoModel } from './model/medicamento.model';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';

@Controller('medicamentos')
export class MedicamentoController {
  constructor(private readonly medicamentoService: MedicamentoService) {}

  @Post()
  async createMedicamento(
    @Body() createMedicamentoDto: CreateMedicamentoDto,
    @Query('database') database: string,
  ): Promise<MedicamentoEntity | MedicamentoModel> {
    return this.medicamentoService.create(createMedicamentoDto, database);
  }

  @Get(':id')
  async getMedicamento(
    @Param('id', ParseIntPipe) id: string | number,
    @Query('database') database: string,
  ): Promise<MedicamentoEntity | MedicamentoModel> {
    return this.medicamentoService.findOne(id, database);
  }

  @Put(':id')
  async updateMedicamento(
    @Param('id', ParseIntPipe) id: string | number,
    @Body() updateMedicamentoDto: CreateMedicamentoDto,
    @Query('database') database: string,
  ): Promise<MedicamentoEntity | MedicamentoModel> {
    return this.medicamentoService.update(id, updateMedicamentoDto, database);
  }

  @Delete(':id')
  async removeMedicamento(
    @Param('id', ParseIntPipe) id: string | number,
    @Query('database') database: string,
  ): Promise<void> {
    return this.medicamentoService.remove(id, database);
  }

  @Get()
  async getMedicamentos(@Query('database') database: string): Promise<MedicamentoEntity[] | MedicamentoModel[]> {
    return this.medicamentoService.findAll(database);
  }
}
