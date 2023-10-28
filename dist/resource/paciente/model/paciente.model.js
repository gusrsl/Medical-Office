"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteSchema = void 0;
const mongoose = require("mongoose");
exports.PacienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    fechaNacimiento: Date,
});
//# sourceMappingURL=paciente.model.js.map