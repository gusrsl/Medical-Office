/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, Query, BadRequestException, NotFoundException } from '@nestjs/common';
import { HistorialMedicoService } from './historial_medico.service';
import { HistorialMedicoEntity } from './entities/historial_medico.entity';
import { HistorialMedicoModel } from './model/historial-medico.model';
import { CreateHistorialMedicoDto } from './dto/create-historial_medico.dto';

@Controller('historialmedico')
export class HistorialMedicoController {
  constructor(private readonly historialMedicoService: HistorialMedicoService) {}

  @Get(':id')
  async findOne(@Param('id') id: string, @Query('database') database: string): Promise<HistorialMedicoEntity | HistorialMedicoModel> {
    if (!id || !database) {
      throw new BadRequestException('ID o base de datos no proporcionados');
    }
    return this.historialMedicoService.findOne(id, database);
  }

  @Get()
  async findAll(@Query('database') database: string): Promise<HistorialMedicoEntity[] | HistorialMedicoModel[]> {
    if (!database) {
      throw new BadRequestException('Base de datos no proporcionada');
    }
    return this.historialMedicoService.findAll(database);
  }

  @Post()
  async create(@Body() createHistorialMedicoDto: CreateHistorialMedicoDto, @Query('database') database: string): Promise<HistorialMedicoEntity | HistorialMedicoModel> {
    if (!database) {
      throw new BadRequestException('Base de datos no proporcionada');
    }
    return this.historialMedicoService.create(createHistorialMedicoDto, database);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHistorialMedicoDto: CreateHistorialMedicoDto, @Query('database') database: string): Promise<HistorialMedicoEntity | HistorialMedicoModel> {
    if (!id || !database) {
      throw new BadRequestException('ID o base de datos no proporcionados');
    }
    return this.historialMedicoService.update(id, updateHistorialMedicoDto, database);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Query('database') database: string): Promise<void> {
    if (!id || !database) {
      throw new BadRequestException('ID o base de datos no proporcionados');
    }
    await this.historialMedicoService.remove(id, database);
  }
}
