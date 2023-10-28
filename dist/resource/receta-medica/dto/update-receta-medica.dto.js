"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRecetaMedicaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_receta_medica_dto_1 = require("./create-receta-medica.dto");
class UpdateRecetaMedicaDto extends (0, mapped_types_1.PartialType)(create_receta_medica_dto_1.CreateRecetaMedicaDto) {
}
exports.UpdateRecetaMedicaDto = UpdateRecetaMedicaDto;
//# sourceMappingURL=update-receta-medica.dto.js.map