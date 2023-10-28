import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
export declare class MedicoService {
    create(createMedicoDto: CreateMedicoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMedicoDto: UpdateMedicoDto): string;
    remove(id: number): string;
}
