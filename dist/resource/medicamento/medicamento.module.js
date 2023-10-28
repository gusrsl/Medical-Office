"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicamentoModule = void 0;
const common_1 = require("@nestjs/common");
const medicamento_service_1 = require("./medicamento.service");
const medicamento_controller_1 = require("./medicamento.controller");
const typeorm_1 = require("@nestjs/typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const medicamento_entity_1 = require("./entities/medicamento.entity");
const medicamento_model_1 = require("./model/medicamento.model");
let MedicamentoModule = class MedicamentoModule {
};
exports.MedicamentoModule = MedicamentoModule;
exports.MedicamentoModule = MedicamentoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([medicamento_entity_1.MedicamentoEntity]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Medicamento', schema: medicamento_model_1.MedicamentoSchema }]),
        ],
        controllers: [medicamento_controller_1.MedicamentoController],
        providers: [medicamento_service_1.MedicamentoService],
    })
], MedicamentoModule);
//# sourceMappingURL=medicamento.module.js.map