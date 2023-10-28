import { CreateLaboratorioDto } from './dto/create-laboratorio.dto';
import { UpdateLaboratorioDto } from './dto/update-laboratorio.dto';
export declare class LaboratorioService {
    create(createLaboratorioDto: CreateLaboratorioDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLaboratorioDto: UpdateLaboratorioDto): string;
    remove(id: number): string;
}
