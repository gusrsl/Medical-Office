/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, Query, HttpCode, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { EnfermedadService } from './enfermedad.service';
import { CreateEnfermedadDto } from './dto/create-enfermedad.dto';
import { EnfermedadEntity } from './entities/enfermedad.entity';
import { EnfermedadModel } from './model/enfermedad.model';

@Controller('enfermedad')
export class EnfermedadController {
  constructor(private readonly enfermedadService: EnfermedadService) {}

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query('db') database: string = 'pg',
  ): Promise<EnfermedadEntity | EnfermedadModel> {
    return this.enfermedadService.findOne(id, database);
  }

  @Get()
  async findAll(@Query('db') database: string = 'pg'): Promise<EnfermedadEntity[] | EnfermedadModel[]> {
    return this.enfermedadService.findAll(database);
  }

  @Post()
  async create(
    @Body() createEnfermedadDto: CreateEnfermedadDto,
    @Query('db') database: string = 'pg',
  ): Promise<EnfermedadEntity | EnfermedadModel> {
    return this.enfermedadService.create(createEnfermedadDto, database);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEnfermedadDto: CreateEnfermedadDto,
    @Query('db') database: string = 'pg',
  ): Promise<EnfermedadEntity | EnfermedadModel> {
    return this.enfermedadService.update(id, updateEnfermedadDto, database);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string, @Query('db') database: string = 'pg'): Promise<void> {
    await this.enfermedadService.remove(id, database);
  }
}
