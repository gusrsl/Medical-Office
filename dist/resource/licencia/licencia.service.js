"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenciaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const licencia_entity_1 = require("./entities/licencia.entity");
let LicenciaService = class LicenciaService {
    constructor(licenciaRepository, licenciaModel) {
        this.licenciaRepository = licenciaRepository;
        this.licenciaModel = licenciaModel;
    }
    async create(createLicenciaDto, database) {
        if (database === 'pg') {
            const newLicencia = this.licenciaRepository.create(createLicenciaDto);
            return this.licenciaRepository.save(newLicencia);
        }
        else if (database === 'mongo') {
            const newLicencia = new this.licenciaModel(createLicenciaDto);
            return newLicencia.save();
        }
        else {
            throw new Error('Base de datos no válida');
        }
    }
    async findOne(id, database) {
        if (database === 'pg') {
            if (typeof id === 'string') {
                throw new Error('ID de Licencia no válido para PostgreSQL');
            }
            return this.licenciaRepository.findOne({ where: { id: id } });
        }
        else if (database === 'mongo') {
            if (typeof id === 'number') {
                throw new Error('ID de Licencia no válido para MongoDB');
            }
            return this.licenciaModel.findById(id).exec();
        }
        else {
            throw new Error('Base de datos no válida');
        }
    }
    async update(id, updateLicenciaDto, database) {
        const existingLicencia = await this.findOne(id, database);
        if (!existingLicencia) {
            throw new Error('Licencia no encontrada');
        }
        if (database === 'pg') {
            await this.licenciaRepository.update(id, updateLicenciaDto);
        }
        else if (database === 'mongo') {
            await this.licenciaModel.findByIdAndUpdate(id, updateLicenciaDto).exec();
        }
        else {
            throw new Error('Base de datos no válida');
        }
        return this.findOne(id, database);
    }
    async remove(id, database) {
        const existingLicencia = await this.findOne(id, database);
        if (!existingLicencia) {
            throw new Error('Licencia no encontrada');
        }
        if (database === 'pg') {
            await this.licenciaRepository.delete(id);
        }
        else if (database === 'mongo') {
            await this.licenciaModel.findByIdAndRemove(id).exec();
        }
        else {
            throw new Error('Base de datos no válida');
        }
    }
    async findAll(database) {
        if (database === 'pg') {
            return this.licenciaRepository.find();
        }
        else if (database === 'mongo') {
            return this.licenciaModel.find().exec();
        }
        else {
            throw new Error('Base de datos no válida');
        }
    }
};
exports.LicenciaService = LicenciaService;
exports.LicenciaService = LicenciaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(licencia_entity_1.LicenciaEntity)),
    __param(1, (0, mongoose_1.InjectModel)('Licencia')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mongoose_2.Model])
], LicenciaService);
//# sourceMappingURL=licencia.service.js.map