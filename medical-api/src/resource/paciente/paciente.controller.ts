/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// paciente.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteEntity } from './entities/paciente.entity';
import { PacienteModel } from './model/paciente.model';
import { CreatePacienteDto } from './dto/create-paciente.dto';

@Controller('pacientes')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  async createPaciente(
    @Body() createPacienteDto: CreatePacienteDto,
    @Query('database') database: string,
  ): Promise<PacienteEntity | PacienteModel> {
    return this.pacienteService.create(createPacienteDto, database);
  }

  @Get(':id')
  async getPaciente(
    @Param('id', ParseIntPipe) id: string | number,
    @Query('database') database: string,
  ): Promise<PacienteEntity | PacienteModel> {
    return this.pacienteService.findOne(id, database);
  }

  @Put(':id')
  async updatePaciente(
    @Param('id', ParseIntPipe) id: string | number,
    @Body() updatePacienteDto: CreatePacienteDto,
    @Query('database') database: string,
  ): Promise<PacienteEntity | PacienteModel> {
    return this.pacienteService.update(id, updatePacienteDto, database);
  }

  @Delete(':id')
  async removePaciente(
    @Param('id', ParseIntPipe) id: string | number,
    @Query('database') database: string,
  ): Promise<void> {
    return this.pacienteService.remove(id, database);
  }

  @Get()
  async getPacientes(@Query('database') database: string[]): Promise<any> {
    return this.pacienteService.findAll(database);
  }
}
