/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, Query, BadRequestException, NotFoundException } from '@nestjs/common';
import { LaboratorioService } from './laboratorio.service';

@Controller('laboratorio')
export class LaboratorioController {
  constructor(private readonly laboratorioService: LaboratorioService) {}

  @Post()
  async create(@Body() createLaboratorioDto: any, @Query('database') database: string) {
    if (database !== 'pg' && database !== 'mongo') {
      throw new BadRequestException('Base de datos no válida');
    }
    return this.laboratorioService.create(createLaboratorioDto, database);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Query('database') database: string) {
    if (database !== 'pg' && database !== 'mongo') {
      throw new BadRequestException('Base de datos no válida');
    }
    return this.laboratorioService.findOne(id, database);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLaboratorioDto: any, @Query('database') database: string) {
    if (database !== 'pg' && database !== 'mongo') {
      throw new BadRequestException('Base de datos no válida');
    }
    return this.laboratorioService.update(id, updateLaboratorioDto, database);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Query('database') database: string) {
    if (database !== 'pg' && database !== 'mongo') {
      throw new BadRequestException('Base de datos no válida');
    }
    await this.laboratorioService.remove(id, database);
  }

  @Get()
  async findAll(@Query('database') database: string) {
    if (database !== 'pg' && database !== 'mongo') {
      throw new BadRequestException('Base de datos no válida');
    }
    return this.laboratorioService.findAll(database);
  }
}
