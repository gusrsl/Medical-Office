import { ResultadoExamenService } from './resultado-examen.service';
import { CreateResultadoExamanDto } from './dto/create-resultado-examan.dto';
import { UpdateResultadoExamanDto } from './dto/update-resultado-examan.dto';
export declare class ResultadoExamenController {
    private readonly resultadoExamenService;
    constructor(resultadoExamenService: ResultadoExamenService);
    create(createResultadoExamanDto: CreateResultadoExamanDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateResultadoExamanDto: UpdateResultadoExamanDto): string;
    remove(id: string): string;
}
