"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoService = void 0;
const common_1 = require("@nestjs/common");
let MedicoService = class MedicoService {
    create(createMedicoDto) {
        return 'This action adds a new medico';
    }
    findAll() {
        return `This action returns all medico`;
    }
    findOne(id) {
        return `This action returns a #${id} medico`;
    }
    update(id, updateMedicoDto) {
        return `This action updates a #${id} medico`;
    }
    remove(id) {
        return `This action removes a #${id} medico`;
    }
};
exports.MedicoService = MedicoService;
exports.MedicoService = MedicoService = __decorate([
    (0, common_1.Injectable)()
], MedicoService);
//# sourceMappingURL=medico.service.js.map