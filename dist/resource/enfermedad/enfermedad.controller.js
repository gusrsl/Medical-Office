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
exports.EnfermedadController = void 0;
const common_1 = require("@nestjs/common");
const enfermedad_service_1 = require("./enfermedad.service");
const create_enfermedad_dto_1 = require("./dto/create-enfermedad.dto");
let EnfermedadController = class EnfermedadController {
    constructor(enfermedadService) {
        this.enfermedadService = enfermedadService;
    }
    async findOne(id, database = 'pg') {
        return this.enfermedadService.findOne(id, database);
    }
    async findAll(database = 'pg') {
        return this.enfermedadService.findAll(database);
    }
    async create(createEnfermedadDto, database = 'pg') {
        return this.enfermedadService.create(createEnfermedadDto, database);
    }
    async update(id, updateEnfermedadDto, database = 'pg') {
        return this.enfermedadService.update(id, updateEnfermedadDto, database);
    }
    async remove(id, database = 'pg') {
        await this.enfermedadService.remove(id, database);
    }
};
exports.EnfermedadController = EnfermedadController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('db')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], EnfermedadController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('db')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EnfermedadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('db')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_enfermedad_dto_1.CreateEnfermedadDto, String]),
    __metadata("design:returntype", Promise)
], EnfermedadController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('db')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_enfermedad_dto_1.CreateEnfermedadDto, String]),
    __metadata("design:returntype", Promise)
], EnfermedadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('db')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], EnfermedadController.prototype, "remove", null);
exports.EnfermedadController = EnfermedadController = __decorate([
    (0, common_1.Controller)('enfermedad'),
    __metadata("design:paramtypes", [enfermedad_service_1.EnfermedadService])
], EnfermedadController);
//# sourceMappingURL=enfermedad.controller.js.map