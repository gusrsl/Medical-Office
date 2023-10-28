import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { EnfermedadEntity } from './entities/enfermedad.entity';
import { EnfermedadModel } from './model/enfermedad.model';
import { CreateEnfermedadDto } from './dto/create-enfermedad.dto';
export declare class EnfermedadService {
    private enfermedadRepository;
    private enfermedadModel;
    constructor(enfermedadRepository: Repository<EnfermedadEntity>, enfermedadModel: Model<EnfermedadModel>);
    create(createEnfermedadDto: CreateEnfermedadDto, database: string): Promise<EnfermedadEntity | EnfermedadModel>;
    findOne(id: string | number, database: string): Promise<EnfermedadEntity | EnfermedadModel>;
    update(id: string | number, updateEnfermedadDto: CreateEnfermedadDto, database: string): Promise<EnfermedadEntity | EnfermedadModel>;
    remove(id: string | number, database: string): Promise<void>;
    findAll(database: string): Promise<EnfermedadEntity[] | EnfermedadModel[]>;
}
