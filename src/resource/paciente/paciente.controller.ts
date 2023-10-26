import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteEntity } from './entities/paciente.entity';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  async create(@Body() paciente: PacienteEntity): Promise<PacienteEntity> {
    return await this.pacienteService.create(paciente);
  }

  @Get()
  async findAll(): Promise<PacienteEntity[]> {
    return await this.pacienteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PacienteEntity> {
    return await this.pacienteService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() paciente: PacienteEntity): Promise<PacienteEntity> {
    return await this.pacienteService.update(id, paciente);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.pacienteService.remove(id);
  }
}
