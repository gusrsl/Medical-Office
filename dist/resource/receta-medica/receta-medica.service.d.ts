import { CreateRecetaMedicaDto } from './dto/create-receta-medica.dto';
import { UpdateRecetaMedicaDto } from './dto/update-receta-medica.dto';
export declare class RecetaMedicaService {
    create(createRecetaMedicaDto: CreateRecetaMedicaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRecetaMedicaDto: UpdateRecetaMedicaDto): string;
    remove(id: number): string;
}
