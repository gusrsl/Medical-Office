import * as mongoose from 'mongoose';
export declare const PacienteSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    nombre?: string;
    apellido?: string;
    fechaNacimiento?: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    nombre?: string;
    apellido?: string;
    fechaNacimiento?: Date;
}>> & mongoose.FlatRecord<{
    nombre?: string;
    apellido?: string;
    fechaNacimiento?: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface PacienteModel extends mongoose.Document {
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
}
