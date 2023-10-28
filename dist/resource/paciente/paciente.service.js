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
exports.PacienteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const paciente_entity_1 = require("./entities/paciente.entity");
let PacienteService = class PacienteService {
    constructor(pacienteRepository, pacienteModel) {
        this.pacienteRepository = pacienteRepository;
        this.pacienteModel = pacienteModel;
    }
    async create(createPacienteDto, database) {
        if (database === 'pg') {
            const newPaciente = this.pacienteRepository.create(createPacienteDto);
            return this.pacienteRepository.save(newPaciente);
        }
        else if (database === 'mongo') {
            const newPaciente = new this.pacienteModel(createPacienteDto);
            return newPaciente.save();
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
            return this.pacienteRepository.findOne({ where: { id } });
        }
        else if (database === 'mongo') {
            if (typeof id === 'number') {
                throw new common_1.BadRequestException('ID de Paciente no válido para MongoDB');
            }
            return this.pacienteModel.findById(id).exec();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
    }
    async update(id, updatePacienteDto, database) {
        const existingPaciente = await this.findOne(id, database);
        if (!existingPaciente) {
            throw new common_1.NotFoundException('Paciente no encontrado');
        }
        if (database === 'pg') {
            await this.pacienteRepository.update(id, updatePacienteDto);
        }
        else if (database === 'mongo') {
            await this.pacienteModel.findByIdAndUpdate(id, updatePacienteDto).exec();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
        return this.findOne(id, database);
    }
    async remove(id, database) {
        const existingPaciente = await this.findOne(id, database);
        if (!existingPaciente) {
            throw new common_1.NotFoundException('Paciente no encontrado');
        }
        if (database === 'pg') {
            await this.pacienteRepository.delete(id);
        }
        else if (database === 'mongo') {
            await this.pacienteModel.findByIdAndRemove(id).exec();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
    }
    async findAll(database) {
        const results = {};
        if (database.includes('pg')) {
            results.pgData = await this.pacienteRepository.find();
        }
        if (database.includes('mongo')) {
            results.mongoData = await this.pacienteModel.find().exec();
        }
        if (results.pgData || results.mongoData) {
            return results;
        }
        throw new common_1.BadRequestException('Base de datos no válida');
    }
};
exports.PacienteService = PacienteService;
exports.PacienteService = PacienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paciente_entity_1.PacienteEntity)),
    __param(1, (0, mongoose_1.InjectModel)('Paciente')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mongoose_2.Model])
], PacienteService);
//# sourceMappingURL=paciente.service.js.map