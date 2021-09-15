import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeguimientoModule } from './seguimiento/seguimiento.module';

@Module({
  imports: [SeguimientoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
