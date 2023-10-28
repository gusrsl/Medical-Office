import { PacienteService } from './paciente.service';
import { PacienteEntity } from './entities/paciente.entity';
import { PacienteModel } from './model/paciente.model';
import { CreatePacienteDto } from './dto/create-paciente.dto';
export declare class PacienteController {
    private readonly pacienteService;
    constructor(pacienteService: PacienteService);
    createPaciente(createPacienteDto: CreatePacienteDto, database: string): Promise<PacienteEntity | PacienteModel>;
    getPaciente(id: string | number, database: string): Promise<PacienteEntity | PacienteModel>;
    updatePaciente(id: string | number, updatePacienteDto: CreatePacienteDto, database: string): Promise<PacienteEntity | PacienteModel>;
    removePaciente(id: string | number, database: string): Promise<void>;
    getPacientes(database: string[]): Promise<any>;
}
