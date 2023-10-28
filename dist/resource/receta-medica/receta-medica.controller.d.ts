import { RecetaMedicaService } from './receta-medica.service';
import { CreateRecetaMedicaDto } from './dto/create-receta-medica.dto';
import { UpdateRecetaMedicaDto } from './dto/update-receta-medica.dto';
export declare class RecetaMedicaController {
    private readonly recetaMedicaService;
    constructor(recetaMedicaService: RecetaMedicaService);
    create(createRecetaMedicaDto: CreateRecetaMedicaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRecetaMedicaDto: UpdateRecetaMedicaDto): string;
    remove(id: string): string;
}
