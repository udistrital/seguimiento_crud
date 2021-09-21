import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 
@Schema({collection: 'seguimiento'})
export class Seguimiento extends Document{
 
  @Prop({required: true})
  oikos_id: number          
 
  @Prop({required: true})
  tercero_id: number

  @Prop({required: true})
  tipo_espacio_id: number

  @Prop({required: true, maxlength: 1 , enum: ['I','S']})
  tipo_registro: String

  @Prop({ required: true })
  activo: boolean
 
  @Prop({ required: true })
  fecha_creacion: Date
 
  @Prop({ required: true })
  fecha_modificacion: Date
};
 
export const SeguimientoSchema = SchemaFactory.createForClass(Seguimiento);
