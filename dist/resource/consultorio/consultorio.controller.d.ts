import { ConsultorioService } from './consultorio.service';
import { CreateConsultorioDto } from './dto/create-consultorio.dto';
import { UpdateConsultorioDto } from './dto/update-consultorio.dto';
export declare class ConsultorioController {
    private readonly consultorioService;
    constructor(consultorioService: ConsultorioService);
    create(createConsultorioDto: CreateConsultorioDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateConsultorioDto: UpdateConsultorioDto): string;
    remove(id: string): string;
}
