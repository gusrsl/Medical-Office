import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistorialMedicoService } from './historial_medico.service';
import { CreateHistorialMedicoDto } from './dto/create-historial_medico.dto';
import { UpdateHistorialMedicoDto } from './dto/update-historial_medico.dto';

@Controller('historial-medico')
export class HistorialMedicoController {
  constructor(private readonly historialMedicoService: HistorialMedicoService) {}

  @Post()
  create(@Body() createHistorialMedicoDto: CreateHistorialMedicoDto) {
    return this.historialMedicoService.create(createHistorialMedicoDto);
  }

  @Get()
  findAll() {
    return this.historialMedicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historialMedicoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistorialMedicoDto: UpdateHistorialMedicoDto) {
    return this.historialMedicoService.update(+id, updateHistorialMedicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historialMedicoService.remove(+id);
  }
}
