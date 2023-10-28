import { MedicamentoService } from './medicamento.service';
import { MedicamentoEntity } from './entities/medicamento.entity';
import { MedicamentoModel } from './model/medicamento.model';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
export declare class MedicamentoController {
    private readonly medicamentoService;
    constructor(medicamentoService: MedicamentoService);
    createMedicamento(createMedicamentoDto: CreateMedicamentoDto, database: string): Promise<MedicamentoEntity | MedicamentoModel>;
    getMedicamento(id: string | number, database: string): Promise<MedicamentoEntity | MedicamentoModel>;
    updateMedicamento(id: string | number, updateMedicamentoDto: CreateMedicamentoDto, database: string): Promise<MedicamentoEntity | MedicamentoModel>;
    removeMedicamento(id: string | number, database: string): Promise<void>;
    getMedicamentos(database: string): Promise<MedicamentoEntity[] | MedicamentoModel[]>;
}
