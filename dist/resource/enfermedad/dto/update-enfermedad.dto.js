"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEnfermedadDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_enfermedad_dto_1 = require("./create-enfermedad.dto");
class UpdateEnfermedadDto extends (0, mapped_types_1.PartialType)(create_enfermedad_dto_1.CreateEnfermedadDto) {
}
exports.UpdateEnfermedadDto = UpdateEnfermedadDto;
//# sourceMappingURL=update-enfermedad.dto.js.map