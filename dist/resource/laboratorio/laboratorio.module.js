"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaboratorioModule = void 0;
const common_1 = require("@nestjs/common");
const laboratorio_service_1 = require("./laboratorio.service");
const laboratorio_controller_1 = require("./laboratorio.controller");
let LaboratorioModule = class LaboratorioModule {
};
exports.LaboratorioModule = LaboratorioModule;
exports.LaboratorioModule = LaboratorioModule = __decorate([
    (0, common_1.Module)({
        controllers: [laboratorio_controller_1.LaboratorioController],
        providers: [laboratorio_service_1.LaboratorioService],
    })
], LaboratorioModule);
//# sourceMappingURL=laboratorio.module.js.map