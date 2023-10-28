"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenciaModule = void 0;
const common_1 = require("@nestjs/common");
const licencia_service_1 = require("./licencia.service");
const licencia_controller_1 = require("./licencia.controller");
const typeorm_1 = require("@nestjs/typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const licencia_entity_1 = require("./entities/licencia.entity");
const licencia_model_1 = require("./model/licencia.model");
let LicenciaModule = class LicenciaModule {
};
exports.LicenciaModule = LicenciaModule;
exports.LicenciaModule = LicenciaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([licencia_entity_1.LicenciaEntity]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Licencia', schema: licencia_model_1.LicenciaSchema }]),
        ],
        controllers: [licencia_controller_1.LicenciaController],
        providers: [licencia_service_1.LicenciaService],
    })
], LicenciaModule);
//# sourceMappingURL=licencia.module.js.map