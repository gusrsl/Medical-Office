"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteModule = void 0;
const common_1 = require("@nestjs/common");
const paciente_service_1 = require("./paciente.service");
const paciente_controller_1 = require("./paciente.controller");
const typeorm_1 = require("@nestjs/typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const paciente_entity_1 = require("./entities/paciente.entity");
const paciente_model_1 = require("./model/paciente.model");
let PacienteModule = class PacienteModule {
};
exports.PacienteModule = PacienteModule;
exports.PacienteModule = PacienteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([paciente_entity_1.PacienteEntity]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Paciente', schema: paciente_model_1.PacienteSchema }]),
        ],
        controllers: [paciente_controller_1.PacienteController],
        providers: [paciente_service_1.PacienteService],
    })
], PacienteModule);
//# sourceMappingURL=paciente.module.js.map