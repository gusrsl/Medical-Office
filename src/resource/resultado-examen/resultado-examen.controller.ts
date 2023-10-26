import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultadoExamenService } from './resultado-examen.service';
import { CreateResultadoExamanDto } from './dto/create-resultado-examan.dto';
import { UpdateResultadoExamanDto } from './dto/update-resultado-examan.dto';

@Controller('resultado-examen')
export class ResultadoExamenController {
  constructor(private readonly resultadoExamenService: ResultadoExamenService) {}

  @Post()
  create(@Body() createResultadoExamanDto: CreateResultadoExamanDto) {
    return this.resultadoExamenService.create(createResultadoExamanDto);
  }

  @Get()
  findAll() {
    return this.resultadoExamenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resultadoExamenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResultadoExamanDto: UpdateResultadoExamanDto) {
    return this.resultadoExamenService.update(+id, updateResultadoExamanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resultadoExamenService.remove(+id);
  }
}
