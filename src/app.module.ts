import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './resource/paciente/paciente.module';
import { MedicoModule } from './resource/medico/medico.module';
import { CitaModule } from './resource/cita/cita.module';
import { LicenciaModule } from './resource/licencia/licencia.module';
import { ConsultorioModule } from './resource/consultorio/consultorio.module';
import { HistorialMedicoModule } from './resource/historial_medico/historial_medico.module';
import { RecetaMedicaModule } from './resource/receta-medica/receta-medica.module';
import { EnfermedadModule } from './resource/enfermedad/enfermedad.module';
import { LaboratorioModule } from './resource/laboratorio/laboratorio.module';
import { ResultadoExamenModule } from './resource/resultado-examen/resultado-examen.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

dotenv.config(); // Cargar variables de entorno desde .env

const logger = new Logger('Database');

async function bootstrap() {
  await TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: true,
  });

  logger.log('Connected to PostgreSQL');
}

bootstrap();

@Module({
  imports: [
    PacienteModule, 
    MedicoModule, 
    CitaModule, 
    LicenciaModule, 
    ConsultorioModule, 
    HistorialMedicoModule, 
    RecetaMedicaModule, 
    EnfermedadModule, 
    LaboratorioModule, 
    ResultadoExamenModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
