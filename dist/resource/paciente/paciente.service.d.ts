import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { PacienteEntity } from './entities/paciente.entity';
import { PacienteModel } from './model/paciente.model';
import { CreatePacienteDto } from './dto/create-paciente.dto';
export declare class PacienteService {
    private pacienteRepository;
    private pacienteModel;
    constructor(pacienteRepository: Repository<PacienteEntity>, pacienteModel: Model<PacienteModel>);
    create(createPacienteDto: CreatePacienteDto, database: string): Promise<PacienteEntity | PacienteModel>;
    findOne(id: string | number, database: string): Promise<PacienteEntity | PacienteModel>;
    update(id: string | number, updatePacienteDto: CreatePacienteDto, database: string): Promise<PacienteEntity | PacienteModel>;
    remove(id: string | number, database: string): Promise<void>;
    findAll(database: string[]): Promise<any>;
}
