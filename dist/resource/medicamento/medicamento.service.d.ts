import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { MedicamentoEntity } from './entities/medicamento.entity';
import { MedicamentoModel } from './model/medicamento.model';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
export declare class MedicamentoService {
    private medicamentoRepository;
    private medicamentoModel;
    constructor(medicamentoRepository: Repository<MedicamentoEntity>, medicamentoModel: Model<MedicamentoModel>);
    create(createMedicamentoDto: CreateMedicamentoDto, database: string): Promise<MedicamentoEntity | MedicamentoModel>;
    findOne(id: string | number, database: string): Promise<MedicamentoEntity | MedicamentoModel>;
    update(id: string | number, updateMedicamentoDto: CreateMedicamentoDto, database: string): Promise<MedicamentoEntity | MedicamentoModel>;
    remove(id: string | number, database: string): Promise<void>;
    findAll(database: string): Promise<MedicamentoEntity[] | MedicamentoModel[]>;
}
