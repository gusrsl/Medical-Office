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
exports.EnfermedadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const enfermedad_entity_1 = require("./entities/enfermedad.entity");
let EnfermedadService = class EnfermedadService {
    constructor(enfermedadRepository, enfermedadModel) {
        this.enfermedadRepository = enfermedadRepository;
        this.enfermedadModel = enfermedadModel;
    }
    async create(createEnfermedadDto, database) {
        if (database === 'pg') {
            const newEnfermedad = this.enfermedadRepository.create(createEnfermedadDto);
            return this.enfermedadRepository.save(newEnfermedad);
        }
        else if (database === 'mongo') {
            const newEnfermedad = new this.enfermedadModel(createEnfermedadDto);
            return newEnfermedad.save();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
    }
    async findOne(id, database) {
        if (database === 'pg') {
            if (typeof id === 'string') {
                throw new common_1.BadRequestException('ID de Enfermedad no válido para PostgreSQL');
            }
            return this.enfermedadRepository.findOne({ where: { enfermedadID: id } });
        }
        else if (database === 'mongo') {
            if (typeof id === 'number') {
                throw new common_1.BadRequestException('ID de Enfermedad no válido para MongoDB');
            }
            return this.enfermedadModel.findById(id).exec();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
    }
    async update(id, updateEnfermedadDto, database) {
        const existingEnfermedad = await this.findOne(id, database);
        if (!existingEnfermedad) {
            throw new common_1.NotFoundException('Enfermedad no encontrada');
        }
        if (database === 'pg') {
            await this.enfermedadRepository.update(id, updateEnfermedadDto);
        }
        else if (database === 'mongo') {
            await this.enfermedadModel.findByIdAndUpdate(id, updateEnfermedadDto).exec();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
        return this.findOne(id, database);
    }
    async remove(id, database) {
        const existingEnfermedad = await this.findOne(id, database);
        if (!existingEnfermedad) {
            throw new common_1.NotFoundException('Enfermedad no encontrada');
        }
        if (database === 'pg') {
            await this.enfermedadRepository.delete(id);
        }
        else if (database === 'mongo') {
            await this.enfermedadModel.findByIdAndRemove(id).exec();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
    }
    async findAll(database) {
        if (database === 'pg') {
            return this.enfermedadRepository.find();
        }
        else if (database === 'mongo') {
            return this.enfermedadModel.find().exec();
        }
        else {
            throw new common_1.BadRequestException('Base de datos no válida');
        }
    }
};
exports.EnfermedadService = EnfermedadService;
exports.EnfermedadService = EnfermedadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(enfermedad_entity_1.EnfermedadEntity)),
    __param(1, (0, mongoose_1.InjectModel)('Enfermedad')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mongoose_2.Model])
], EnfermedadService);
//# sourceMappingURL=enfermedad.service.js.map