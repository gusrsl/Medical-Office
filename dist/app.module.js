"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const paciente_module_1 = require("./resource/paciente/paciente.module");
const medico_module_1 = require("./resource/medico/medico.module");
const cita_module_1 = require("./resource/cita/cita.module");
const licencia_module_1 = require("./resource/licencia/licencia.module");
const consultorio_module_1 = require("./resource/consultorio/consultorio.module");
const historial_medico_module_1 = require("./resource/historial_medico/historial_medico.module");
const receta_medica_module_1 = require("./resource/receta-medica/receta-medica.module");
const enfermedad_module_1 = require("./resource/enfermedad/enfermedad.module");
const laboratorio_module_1 = require("./resource/laboratorio/laboratorio.module");
const resultado_examen_module_1 = require("./resource/resultado-examen/resultado-examen.module");
const medicamento_module_1 = require("./resource/medicamento/medicamento.module");
const typeorm_1 = require("@nestjs/typeorm");
const mongoose_1 = require("@nestjs/mongoose");
const dotenv = require("dotenv");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            paciente_module_1.PacienteModule,
            medico_module_1.MedicoModule,
            cita_module_1.CitaModule,
            licencia_module_1.LicenciaModule,
            consultorio_module_1.ConsultorioModule,
            historial_medico_module_1.HistorialMedicoModule,
            receta_medica_module_1.RecetaMedicaModule,
            enfermedad_module_1.EnfermedadModule,
            laboratorio_module_1.LaboratorioModule,
            resultado_examen_module_1.ResultadoExamenModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: parseInt(process.env.POSTGRES_PORT, 10),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                synchronize: true,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                logging: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI),
            medicamento_module_1.MedicamentoModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map