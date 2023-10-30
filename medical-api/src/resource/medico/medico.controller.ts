/* eslint-disable prettier/prettier */
// medico.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, Query, ParseIntPipe } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { MedicoEntity } from './entities/medico.entity';
import { MedicoModel } from './model/medico.model';
import { CreateMedicoDto } from './dto/create-medico.dto';

@Controller('medicos')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @Post()
  async createMedico(
    @Body() createMedicoDto: CreateMedicoDto,
    @Query('database') database: string,
  ): Promise<MedicoEntity | MedicoModel> {
    return this.medicoService.create(createMedicoDto, database);
  }

  @Get(':id')
  async getMedico(
    @Param('id', ParseIntPipe) id: string | number,
    @Query('database') database: string,
  ): Promise<MedicoEntity | MedicoModel> {
    return this.medicoService.findOne(id, database);
  }

  @Put(':id')
  async updateMedico(
    @Param('id', ParseIntPipe) id: string | number,
    @Body() updateMedicoDto: CreateMedicoDto,
    @Query('database') database: string,
  ): Promise<MedicoEntity | MedicoModel> {
    return this.medicoService.update(id, updateMedicoDto, database);
  }

  @Delete(':id')
  async removeMedico(
    @Param('id', ParseIntPipe) id: string | number,
    @Query('database') database: string,
  ): Promise<void> {
    return this.medicoService.remove(id, database);
  }

  @Get()
  async getMedicos(@Query('database') database: string): Promise<MedicoEntity[] | MedicoModel[]> {
    return this.medicoService.findAll(database);
  }
}
