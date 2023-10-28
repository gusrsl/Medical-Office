import { CreateConsultorioDto } from './dto/create-consultorio.dto';
import { UpdateConsultorioDto } from './dto/update-consultorio.dto';
export declare class ConsultorioService {
    create(createConsultorioDto: CreateConsultorioDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConsultorioDto: UpdateConsultorioDto): string;
    remove(id: number): string;
}
