/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, Query, ParseIntPipe } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CreateCitaDto } from './dto/create-cita.dto';

@Controller('cita')
export class CitaController {
  constructor(private citaService: CitaService) {}

  @Post()
  create(@Body() createCitaDto: CreateCitaDto, @Query('database') database: string) {
    return this.citaService.create(createCitaDto, database);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Query('database') database: string) {
    return this.citaService.findOne(id, database);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCitaDto: CreateCitaDto, @Query('database') database: string) {
    return this.citaService.update(id, updateCitaDto, database);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @Query('database') database: string) {
    return this.citaService.remove(id, database);
  }

  @Get()
  findAll(@Query('database') database: string) {
    return this.citaService.findAll(database);
  }
}
