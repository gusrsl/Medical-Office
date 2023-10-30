/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, Query, BadRequestException, NotFoundException } from '@nestjs/common';
import { ResultadoExamenService } from './resultado-examen.service';

@Controller('resultado-examen')
export class ResultadoExamenController {
  constructor(private readonly resultadoExamenService: ResultadoExamenService) {}

  @Post()
  async create(@Body() createResultadoExamenDto: any, @Query('database') database: string) {
    if (database !== 'pg' && database !== 'mongo') {
      throw new BadRequestException('Base de datos no válida');
    }
    return this.resultadoExamenService.create(createResultadoExamenDto, database);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Query('database') database: string) {
    if (database !== 'pg' && database !== 'mongo') {
      throw new BadRequestException('Base de datos no válida');
    }
    return this.resultadoExamenService.findOne(id, database);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateResultadoExamenDto: any, @Query('database') database: string) {
    if (database !== 'pg' && database !== 'mongo') {
      throw new BadRequestException('Base de datos no válida');
    }
    return this.resultadoExamenService.update(id, updateResultadoExamenDto, database);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Query('database') database: string) {
    if (database !== 'pg' && database !== 'mongo') {
      throw new BadRequestException('Base de datos no válida');
    }
    await this.resultadoExamenService.remove(id, database);
  }

  @Get()
  async findAll(@Query('database') database: string) {
    if (database !== 'pg' && database !== 'mongo') {
      throw new BadRequestException('Base de datos no válida');
    }
    return this.resultadoExamenService.findAll(database);
  }
}
