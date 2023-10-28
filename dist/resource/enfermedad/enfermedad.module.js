"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnfermedadModule = void 0;
const common_1 = require("@nestjs/common");
const enfermedad_service_1 = require("./enfermedad.service");
const enfermedad_controller_1 = require("./enfermedad.controller");
const typeorm_1 = require("@nestjs/typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const enfermedad_entity_1 = require("./entities/enfermedad.entity");
const enfermedad_model_1 = require("./model/enfermedad.model");
let EnfermedadModule = class EnfermedadModule {
};
exports.EnfermedadModule = EnfermedadModule;
exports.EnfermedadModule = EnfermedadModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([enfermedad_entity_1.EnfermedadEntity]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Enfermedad', schema: enfermedad_model_1.EnfermedadSchema }]),
        ],
        controllers: [enfermedad_controller_1.EnfermedadController],
        providers: [enfermedad_service_1.EnfermedadService],
    })
], EnfermedadModule);
//# sourceMappingURL=enfermedad.module.js.map