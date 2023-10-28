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
exports.MedicamentoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const medicamento_entity_1 = require("./entities/medicamento.entity");
let MedicamentoService = class MedicamentoService {
    constructor(medicamentoRepository, medicamentoModel) {
        this.medicamentoRepository = medicamentoRepository;
        this.medicamentoModel = medicamentoModel;
    }
    async create(createMedicamentoDto, database) {
        if (database === 'pg') {
            const newMedicamento = this.medicamentoRepository.create(createMedicamentoDto);
            return this.medicamentoRepository.save(newMedicamento);
        }
        else if (database === 'mongo') {
            const newMedicamento = new this.medicamentoModel(createMedicamentoDto);
            return newMedicamento.save();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
    }
    async findOne(id, database) {
        if (database === 'pg') {
            if (typeof id === 'string') {
                throw new common_1.BadRequestException('ID de Paciente no válido para PostgreSQL');
            }
            return this.medicamentoRepository.findOne({ where: { id: id } });
        }
        else if (database === 'mongo') {
            if (typeof id === 'number') {
                throw new common_1.BadRequestException('ID de Paciente no válido para MongoDB');
            }
            return this.medicamentoModel.findById(id).exec();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
    }
    async update(id, updateMedicamentoDto, database) {
        const existingMedicamento = await this.findOne(id, database);
        if (!existingMedicamento) {
            throw new common_1.NotFoundException('Medicamento no encontrado');
        }
        if (database === 'pg') {
            await this.medicamentoRepository.update(id, updateMedicamentoDto);
        }
        else if (database === 'mongo') {
            await this.medicamentoModel.findByIdAndUpdate(id, updateMedicamentoDto).exec();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
        return this.findOne(id, database);
    }
    async remove(id, database) {
        const existingMedicamento = await this.findOne(id, database);
        if (!existingMedicamento) {
            throw new common_1.NotFoundException('Medicamento no encontrado');
        }
        if (database === 'pg') {
            await this.medicamentoRepository.delete(id);
        }
        else if (database === 'mongo') {
            await this.medicamentoModel.findByIdAndRemove(id).exec();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
    }
    async findAll(database) {
        if (database === 'pg') {
            return this.medicamentoRepository.find();
        }
        else if (database === 'mongo') {
            return this.medicamentoModel.find().exec();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
    }
};
exports.MedicamentoService = MedicamentoService;
exports.MedicamentoService = MedicamentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medicamento_entity_1.MedicamentoEntity)),
    __param(1, (0, mongoose_1.InjectModel)('Medicamento')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mongoose_2.Model])
], MedicamentoService);
//# sourceMappingURL=medicamento.service.js.map