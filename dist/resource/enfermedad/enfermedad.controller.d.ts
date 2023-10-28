import { EnfermedadService } from './enfermedad.service';
import { CreateEnfermedadDto } from './dto/create-enfermedad.dto';
import { EnfermedadEntity } from './entities/enfermedad.entity';
import { EnfermedadModel } from './model/enfermedad.model';
export declare class EnfermedadController {
    private readonly enfermedadService;
    constructor(enfermedadService: EnfermedadService);
    findOne(id: string, database?: string): Promise<EnfermedadEntity | EnfermedadModel>;
    findAll(database?: string): Promise<EnfermedadEntity[] | EnfermedadModel[]>;
    create(createEnfermedadDto: CreateEnfermedadDto, database?: string): Promise<EnfermedadEntity | EnfermedadModel>;
    update(id: string, updateEnfermedadDto: CreateEnfermedadDto, database?: string): Promise<EnfermedadEntity | EnfermedadModel>;
    remove(id: string, database?: string): Promise<void>;
}
