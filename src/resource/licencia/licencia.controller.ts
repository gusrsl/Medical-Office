/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, Query, Req, HttpCode } from '@nestjs/common';
import { LicenciaService } from './licencia.service';
import { CreateLicenciaDto } from './dto/create-licencia.dto';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LicenciaEntity } from './entities/licencia.entity';

@ApiTags('Licencia')
@Controller('licencia')
export class LicenciaController {
  constructor(private readonly licenciaService: LicenciaService) {}

  @Post()
  @HttpCode(201)
  @ApiResponse({ status: 201, description: 'Create a new license', type: LicenciaEntity })
  create(@Body() createLicenciaDto: CreateLicenciaDto, @Query('database') database: string) {
    return this.licenciaService.create(createLicenciaDto, database);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Retrieve a license by ID', type: LicenciaEntity })
  @ApiParam({ name: 'id', type: String, description: 'License ID' })
  findOne(@Param('id') id: string, @Query('database') database: string) {
    return this.licenciaService.findOne(id, database);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Update a license by ID', type: LicenciaEntity })
  @ApiParam({ name: 'id', type: String, description: 'License ID' })
  update(@Param('id') id: string, @Body() updateLicenciaDto: CreateLicenciaDto, @Query('database') database: string) {
    return this.licenciaService.update(id, updateLicenciaDto, database);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiResponse({ status: 204, description: 'Delete a license by ID' })
  @ApiParam({ name: 'id', type: String, description: 'License ID' })
  remove(@Param('id') id: string, @Query('database') database: string) {
    return this.licenciaService.remove(id, database);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Retrieve all licenses', type: [LicenciaEntity] })
  @ApiQuery({ name: 'database', type: String, required: false, description: 'Database (pg or mongo)' })
  findAll(@Query('database') database: string) {
    return this.licenciaService.findAll(database);
  }
}
