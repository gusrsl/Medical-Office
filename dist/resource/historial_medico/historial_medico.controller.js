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
exports.HistorialMedicoController = void 0;
const common_1 = require("@nestjs/common");
const historial_medico_service_1 = require("./historial_medico.service");
const create_historial_medico_dto_1 = require("./dto/create-historial_medico.dto");
const update_historial_medico_dto_1 = require("./dto/update-historial_medico.dto");
let HistorialMedicoController = class HistorialMedicoController {
    constructor(historialMedicoService) {
        this.historialMedicoService = historialMedicoService;
    }
    create(createHistorialMedicoDto) {
        return this.historialMedicoService.create(createHistorialMedicoDto);
    }
    findAll() {
        return this.historialMedicoService.findAll();
    }
    findOne(id) {
        return this.historialMedicoService.findOne(+id);
    }
    update(id, updateHistorialMedicoDto) {
        return this.historialMedicoService.update(+id, updateHistorialMedicoDto);
    }
    remove(id) {
        return this.historialMedicoService.remove(+id);
    }
};
exports.HistorialMedicoController = HistorialMedicoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_historial_medico_dto_1.CreateHistorialMedicoDto]),
    __metadata("design:returntype", void 0)
], HistorialMedicoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HistorialMedicoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HistorialMedicoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_historial_medico_dto_1.UpdateHistorialMedicoDto]),
    __metadata("design:returntype", void 0)
], HistorialMedicoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HistorialMedicoController.prototype, "remove", null);
exports.HistorialMedicoController = HistorialMedicoController = __decorate([
    (0, common_1.Controller)('historial-medico'),
    __metadata("design:paramtypes", [historial_medico_service_1.HistorialMedicoService])
], HistorialMedicoController);
//# sourceMappingURL=historial_medico.controller.js.map