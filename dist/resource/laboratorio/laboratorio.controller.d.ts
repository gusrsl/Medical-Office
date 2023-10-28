import { LaboratorioService } from './laboratorio.service';
import { CreateLaboratorioDto } from './dto/create-laboratorio.dto';
import { UpdateLaboratorioDto } from './dto/update-laboratorio.dto';
export declare class LaboratorioController {
    private readonly laboratorioService;
    constructor(laboratorioService: LaboratorioService);
    create(createLaboratorioDto: CreateLaboratorioDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLaboratorioDto: UpdateLaboratorioDto): string;
    remove(id: string): string;
}
