import { Module } from '@nestjs/common';
import { SeguimientoController } from './seguimiento.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Seguimiento, SeguimientoSchema} from './schemas/seguimiento.schema';
import { SeguimientoService } from './seguimiento.service';
 
@Module({
  imports: [MongooseModule.forFeature([{name: Seguimiento.name, schema: SeguimientoSchema}])],
  controllers: [SeguimientoController],
  providers: [SeguimientoService]
})
export class SeguimientoModule {}