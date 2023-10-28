/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class LicenciaModel {
  @Prop({ type: Number })
  _id: number;

  @Prop()
  numeroLicencia: string;
}

export const LicenciaSchema = SchemaFactory.createForClass(LicenciaModel);
