import { HistorialMedicoService } from './historial_medico.service';
import { CreateHistorialMedicoDto } from './dto/create-historial_medico.dto';
import { UpdateHistorialMedicoDto } from './dto/update-historial_medico.dto';
export declare class HistorialMedicoController {
    private readonly historialMedicoService;
    constructor(historialMedicoService: HistorialMedicoService);
    create(createHistorialMedicoDto: CreateHistorialMedicoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHistorialMedicoDto: UpdateHistorialMedicoDto): string;
    remove(id: string): string;
}
