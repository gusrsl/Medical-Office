/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// consultorio.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ConsultorioService } from './consultorio.service';
import { ConsultorioEntity } from './entities/consultorio.entity';
import { ConsultorioModel } from './model/consultorio.model';
import { CreateConsultorioDto } from './dto/create-consultorio.dto';

@Controller('consultorios')
export class ConsultorioController {
  constructor(private readonly consultorioService: ConsultorioService) {}

  @Post()
  createConsultorio(@Body() createConsultorioDto: CreateConsultorioDto, @Query('database') database: string) {
    return this.consultorioService.create(createConsultorioDto, database);
  }

  @Get(':id')
  getConsultorio(@Param('id') id: string, @Query('database') database: string) {
    return this.consultorioService.findOne(id, database);
  }

  @Put(':id')
  updateConsultorio(@Param('id') id: string, @Body() updateConsultorioDto: CreateConsultorioDto, @Query('database') database: string) {
    return this.consultorioService.update(id, updateConsultorioDto, database);
  }

  @Delete(':id')
  removeConsultorio(@Param('id') id: string, @Query('database') database: string) {
    return this.consultorioService.remove(id, database);
  }

  @Get()
  getConsultorios(@Query('database') database: string | string[]) {
    // Convierte a un arreglo si es un solo valor
    const databases = Array.isArray(database) ? database : [database];
    return this.consultorioService.findAll(databases);
  }
}
