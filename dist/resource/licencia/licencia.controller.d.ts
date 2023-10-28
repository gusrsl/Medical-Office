import { LicenciaService } from './licencia.service';
import { CreateLicenciaDto } from './dto/create-licencia.dto';
import { LicenciaEntity } from './entities/licencia.entity';
export declare class LicenciaController {
    private readonly licenciaService;
    constructor(licenciaService: LicenciaService);
    create(createLicenciaDto: CreateLicenciaDto, database: string): Promise<LicenciaEntity | import("./model/licencia.model").LicenciaModel>;
    findOne(id: string, database: string): Promise<LicenciaEntity | import("./model/licencia.model").LicenciaModel>;
    update(id: string, updateLicenciaDto: CreateLicenciaDto, database: string): Promise<LicenciaEntity | import("./model/licencia.model").LicenciaModel>;
    remove(id: string, database: string): Promise<void>;
    findAll(database: string): Promise<LicenciaEntity[] | import("./model/licencia.model").LicenciaModel[]>;
}
