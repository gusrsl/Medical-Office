"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecetaMedicaModule = void 0;
const common_1 = require("@nestjs/common");
const receta_medica_service_1 = require("./receta-medica.service");
const receta_medica_controller_1 = require("./receta-medica.controller");
let RecetaMedicaModule = class RecetaMedicaModule {
};
exports.RecetaMedicaModule = RecetaMedicaModule;
exports.RecetaMedicaModule = RecetaMedicaModule = __decorate([
    (0, common_1.Module)({
        controllers: [receta_medica_controller_1.RecetaMedicaController],
        providers: [receta_medica_service_1.RecetaMedicaService],
    })
], RecetaMedicaModule);
//# sourceMappingURL=receta-medica.module.js.map