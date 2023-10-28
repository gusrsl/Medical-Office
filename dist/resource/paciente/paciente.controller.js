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
exports.PacienteController = void 0;
const common_1 = require("@nestjs/common");
const paciente_service_1 = require("./paciente.service");
const create_paciente_dto_1 = require("./dto/create-paciente.dto");
let PacienteController = class PacienteController {
    constructor(pacienteService) {
        this.pacienteService = pacienteService;
    }
    async createPaciente(createPacienteDto, database) {
        return this.pacienteService.create(createPacienteDto, database);
    }
    async getPaciente(id, database) {
        return this.pacienteService.findOne(id, database);
    }
    async updatePaciente(id, updatePacienteDto, database) {
        return this.pacienteService.update(id, updatePacienteDto, database);
    }
    async removePaciente(id, database) {
        return this.pacienteService.remove(id, database);
    }
    async getPacientes(database) {
        return this.pacienteService.findAll(database);
    }
};
exports.PacienteController = PacienteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('database')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paciente_dto_1.CreatePacienteDto, String]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "createPaciente", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('database')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "getPaciente", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('database')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_paciente_dto_1.CreatePacienteDto, String]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "updatePaciente", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('database')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "removePaciente", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('database')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "getPacientes", null);
exports.PacienteController = PacienteController = __decorate([
    (0, common_1.Controller)('pacientes'),
    __metadata("design:paramtypes", [paciente_service_1.PacienteService])
], PacienteController);
//# sourceMappingURL=paciente.controller.js.map