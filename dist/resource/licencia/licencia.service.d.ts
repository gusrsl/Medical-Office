import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { LicenciaEntity } from './entities/licencia.entity';
import { LicenciaModel } from './model/licencia.model';
import { CreateLicenciaDto } from './dto/create-licencia.dto';
export declare class LicenciaService {
    private licenciaRepository;
    private licenciaModel;
    constructor(licenciaRepository: Repository<LicenciaEntity>, licenciaModel: Model<LicenciaModel>);
    create(createLicenciaDto: CreateLicenciaDto, database: string): Promise<LicenciaEntity | LicenciaModel>;
    findOne(id: string | number, database: string): Promise<LicenciaEntity | LicenciaModel>;
    update(id: string | number, updateLicenciaDto: CreateLicenciaDto, database: string): Promise<LicenciaEntity | LicenciaModel>;
    remove(id: string | number, database: string): Promise<void>;
    findAll(database: string): Promise<LicenciaEntity[] | LicenciaModel[]>;
}
