/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException, BadRequestException, ParseIntPipe } from '@nestjs/common';
import { RecetaMedicaService } from './receta-medica.service';
import { RecetaMedicaEntity } from './entities/receta-medica.entity';
import { RecetaMedicaModel } from './model/receta-medica.model';

@Controller('recetamedica')
export class RecetaMedicaController {
  constructor(private readonly recetaMedicaService: RecetaMedicaService) {}

  @Post()
  async create(
    @Body() createRecetaMedicaDto: any,
    @Query('database') database: string,
  ): Promise<RecetaMedicaEntity | RecetaMedicaModel> {
    return this.recetaMedicaService.create(createRecetaMedicaDto, database);
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('database') database: string,
  ): Promise<RecetaMedicaEntity | RecetaMedicaModel> {
    const recetaMedica = await this.recetaMedicaService.findOne(id, database);
    if (!recetaMedica) {
      throw new NotFoundException('Receta Médica no encontrada');
    }
    return recetaMedica;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRecetaMedicaDto: any,
    @Query('database') database: string,
  ): Promise<RecetaMedicaEntity | RecetaMedicaModel> {
    const recetaMedica = await this.recetaMedicaService.update(id, updateRecetaMedicaDto, database);
    if (!recetaMedica) {
      throw new NotFoundException('Receta Médica no encontrada');
    }
    return recetaMedica;
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Query('database') database: string,
  ): Promise<void> {
    const recetaMedica = await this.recetaMedicaService.findOne(id, database);
    if (!recetaMedica) {
      throw new NotFoundException('Receta Médica no encontrada');
    }
    await this.recetaMedicaService.remove(id, database);
  }

  @Get()
  async findAll(@Query('database') database: string): Promise<RecetaMedicaEntity[] | RecetaMedicaModel[]> {
    return this.recetaMedicaService.findAll(database);
  }
}
