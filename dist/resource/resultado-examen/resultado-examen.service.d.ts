import { CreateResultadoExamanDto } from './dto/create-resultado-examan.dto';
import { UpdateResultadoExamanDto } from './dto/update-resultado-examan.dto';
export declare class ResultadoExamenService {
    create(createResultadoExamanDto: CreateResultadoExamanDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateResultadoExamanDto: UpdateResultadoExamanDto): string;
    remove(id: number): string;
}
