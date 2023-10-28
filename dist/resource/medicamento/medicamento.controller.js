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
exports.MedicamentoController = void 0;
const common_1 = require("@nestjs/common");
const medicamento_service_1 = require("./medicamento.service");
const create_medicamento_dto_1 = require("./dto/create-medicamento.dto");
let MedicamentoController = class MedicamentoController {
    constructor(medicamentoService) {
        this.medicamentoService = medicamentoService;
    }
    async createMedicamento(createMedicamentoDto, database) {
        return this.medicamentoService.create(createMedicamentoDto, database);
    }
    async getMedicamento(id, database) {
        return this.medicamentoService.findOne(id, database);
    }
    async updateMedicamento(id, updateMedicamentoDto, database) {
        return this.medicamentoService.update(id, updateMedicamentoDto, database);
    }
    async removeMedicamento(id, database) {
        return this.medicamentoService.remove(id, database);
    }
    async getMedicamentos(database) {
        return this.medicamentoService.findAll(database);
    }
};
exports.MedicamentoController = MedicamentoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('database')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medicamento_dto_1.CreateMedicamentoDto, String]),
    __metadata("design:returntype", Promise)
], MedicamentoController.prototype, "createMedicamento", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('database')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MedicamentoController.prototype, "getMedicamento", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('database')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_medicamento_dto_1.CreateMedicamentoDto, String]),
    __metadata("design:returntype", Promise)
], MedicamentoController.prototype, "updateMedicamento", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('database')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MedicamentoController.prototype, "removeMedicamento", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('database')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicamentoController.prototype, "getMedicamentos", null);
exports.MedicamentoController = MedicamentoController = __decorate([
    (0, common_1.Controller)('medicamentos'),
    __metadata("design:paramtypes", [medicamento_service_1.MedicamentoService])
], MedicamentoController);
//# sourceMappingURL=medicamento.controller.js.map