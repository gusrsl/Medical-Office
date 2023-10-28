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
exports.ResultadoExamenController = void 0;
const common_1 = require("@nestjs/common");
const resultado_examen_service_1 = require("./resultado-examen.service");
const create_resultado_examan_dto_1 = require("./dto/create-resultado-examan.dto");
const update_resultado_examan_dto_1 = require("./dto/update-resultado-examan.dto");
let ResultadoExamenController = class ResultadoExamenController {
    constructor(resultadoExamenService) {
        this.resultadoExamenService = resultadoExamenService;
    }
    create(createResultadoExamanDto) {
        return this.resultadoExamenService.create(createResultadoExamanDto);
    }
    findAll() {
        return this.resultadoExamenService.findAll();
    }
    findOne(id) {
        return this.resultadoExamenService.findOne(+id);
    }
    update(id, updateResultadoExamanDto) {
        return this.resultadoExamenService.update(+id, updateResultadoExamanDto);
    }
    remove(id) {
        return this.resultadoExamenService.remove(+id);
    }
};
exports.ResultadoExamenController = ResultadoExamenController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resultado_examan_dto_1.CreateResultadoExamanDto]),
    __metadata("design:returntype", void 0)
], ResultadoExamenController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResultadoExamenController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultadoExamenController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_resultado_examan_dto_1.UpdateResultadoExamanDto]),
    __metadata("design:returntype", void 0)
], ResultadoExamenController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultadoExamenController.prototype, "remove", null);
exports.ResultadoExamenController = ResultadoExamenController = __decorate([
    (0, common_1.Controller)('resultado-examen'),
    __metadata("design:paramtypes", [resultado_examen_service_1.ResultadoExamenService])
], ResultadoExamenController);
//# sourceMappingURL=resultado-examen.controller.js.map