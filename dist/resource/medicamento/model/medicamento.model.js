"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicamentoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MedicamentoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
});
//# sourceMappingURL=medicamento.model.js.map