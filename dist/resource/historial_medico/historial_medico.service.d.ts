import { CreateHistorialMedicoDto } from './dto/create-historial_medico.dto';
import { UpdateHistorialMedicoDto } from './dto/update-historial_medico.dto';
export declare class HistorialMedicoService {
    create(createHistorialMedicoDto: CreateHistorialMedicoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHistorialMedicoDto: UpdateHistorialMedicoDto): string;
    remove(id: number): string;
}
