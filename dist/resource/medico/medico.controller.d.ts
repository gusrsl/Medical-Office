import { MedicoService } from './medico.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
export declare class MedicoController {
    private readonly medicoService;
    constructor(medicoService: MedicoService);
    create(createMedicoDto: CreateMedicoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMedicoDto: UpdateMedicoDto): string;
    remove(id: string): string;
}
