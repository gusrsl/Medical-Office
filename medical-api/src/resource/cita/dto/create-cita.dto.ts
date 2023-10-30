/* eslint-disable prettier/prettier */
// create-cita.dto.ts

import { IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CreateCitaDto {
  @IsNotEmpty()
  @IsDateString()
  fechaYHora: Date;

  @IsNotEmpty()
  @IsNumber()
  pacienteID: number; // Debe ser el ID del paciente al que se asocia la cita

  @IsNotEmpty()
  @IsNumber()
  medicoID: number; // Debe ser el ID del médico al que se asocia la cita
}
